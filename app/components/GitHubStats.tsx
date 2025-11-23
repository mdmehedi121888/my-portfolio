"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFire,
  FaStar,
  FaCodeBranch,
  FaCodePullRequest,
  FaCircleExclamation,
  FaGithub,
  FaCalendar,
  FaTrophy,
} from "react-icons/fa6";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const USERNAME = "mdmehedi121888";

export default function GithubStatsDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubData() {
      const query = `
        query($username: String!) {
          user(login: $username) {
            createdAt
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks { contributionDays { contributionCount date } }
              }
            }
            repositoriesContributedTo(first: 100, includeUserRepositories: true) { totalCount }
            repositories(first: 100, ownerAffiliations: OWNER) {
              nodes { stargazerCount }
            }
            contributionsCollection {
              totalCommitContributions
              totalPullRequestContributions
              totalIssueContributions
            }
          }
        }
      `;

      try {
        const res = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
          body: JSON.stringify({ query, variables: { username: USERNAME } }),
        });

        const json = await res.json();
        if (json.errors) throw new Error(json.errors[0].message);

        const user = json.data.user;
        const weeks = user.contributionsCollection.contributionCalendar.weeks;
        const days = weeks.flatMap((week: any) =>
          week.contributionDays.map((day: any) => ({ date: day.date, count: day.contributionCount }))
        );

        days.sort((a: any, b: any) => a.date.localeCompare(b.date));

        let currentStreak = 0;
        let longestStreak = 0;
        let tempStreak = 0;

        days.forEach((day: any) => {
          if (day.count > 0) {
            tempStreak++;
            longestStreak = Math.max(longestStreak, tempStreak);
          } else tempStreak = 0;
        });

        const todayStr = new Date().toISOString().slice(0, 10);
        let i = days.length - 1;
        while (i >= 0 && days[i].date <= todayStr) {
          if (days[i].count > 0) currentStreak++;
          else if (days[i].date !== todayStr) break;
          i--;
        }

        const totalStars = user.repositories.nodes.reduce((sum: number, repo: any) => sum + repo.stargazerCount, 0);
        const joinDate = new Date(user.createdAt).toLocaleDateString("en-US", { month: "short", year: "numeric" });

        setData({
          totalContributions: user.contributionsCollection.contributionCalendar.totalContributions,
          totalCommits: user.contributionsCollection.totalCommitContributions,
          totalPRs: user.contributionsCollection.totalPullRequestContributions,
          totalIssues: user.contributionsCollection.totalIssueContributions,
          contributedTo: user.repositoriesContributedTo.totalCount,
          totalStars,
          currentStreak,
          longestStreak,
          joinDate,
        });
      } catch (err) {
        console.error("GitHub API Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl text-gray-400">Loading GitHub stats...</div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <section className="relative px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-7"
        >
          <h2 className="text-4xl md:text-5xl font-black bg-linear-to-r from-cyan-400 via-yellow-400 to-pink-500 bg-clip-text text-transparent">
            GitHub Stats
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Real-time contribution stats, streaks, and impact across open source.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Total Contributions */}
          <StatCard
            title="Total Contributions"
            value={data.totalContributions.toLocaleString()}
            icon={<FaGithub className="w-8 h-8" />}
            badge="All Time"
            badgeColor="bg-linear-to-r from-purple-500 to-pink-500"
            delay={0.1}
          />

          {/* Current Streak */}
          <StatCard
            title="Current Streak"
            value={data.currentStreak}
            suffix=" Days"
            icon={<FaFire className="w-8 h-8 text-orange-500" />}
            badge="On Fire"
            badgeColor="bg-linear-to-r from-orange-500 to-red-500"
            delay={0.2}
          />

          {/* Longest Streak */}
          <StatCard
            title="Longest Streak"
            value={data.longestStreak}
            suffix=" Days"
            icon={<FaTrophy className="w-8 h-8 text-yellow-500" />}
            badge="Personal Best"
            badgeColor="bg-linear-to-r from-yellow-500 to-amber-600"
            delay={0.3}
          />

          {/* Total Stars Earned */}
          <StatCard
            title="Stars Earned"
            value={data.totalStars}
            icon={<FaStar className="w-8 h-8 text-green-400" />}
            badge="Community Love"
            badgeColor="bg-linear-to-r from-green-500 to-emerald-500"
            delay={0.4}
          />

          {/* Total Commits */}
          <StatCard
            title="Total Commits"
            value={data.totalCommits >= 1000 ? `${(data.totalCommits / 1000).toFixed(1)}k` : data.totalCommits}
            icon={<FaCodeBranch className="w-8 h-8 text-yellow-400" />}
            badge="Code Warrior"
            badgeColor="bg-linear-to-r from-yellow-500 to-orange-500"
            delay={0.5}
          />

          {/* Total PRs + Issues */}
          <StatCard
            title="PRs + Issues"
            value={`${data.totalPRs} PRs • ${data.totalIssues} Issues`}
            icon={<FaCodePullRequest className="w-8 h-8 text-purple-400" />}
            badge="Open Source"
            badgeColor="bg-linear-to-r from-purple-500 to-indigo-500"
            delay={0.6}
          />
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mb-5 text-gray-500"
        >
          <p>
            Member since <span className="text-yellow-400 font-semibold">{data.joinDate}</span> • 
            Contributed to <span className="text-cyan-400 font-semibold">{data.contributedTo}</span> repositories
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Reusable Glassmorphic Stat Card (same as Education)
function StatCard({ title, value, suffix = "", icon, badge, badgeColor, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-linear-to-br from-yellow-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />

      <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:scale-[1.02]">
        <div className={`absolute -top-4 left-8 px-5 py-2 rounded-full text-white font-bold text-xs shadow-lg ${badgeColor}`}>
          {badge}
        </div>

        <div className="flex items-center gap-5 mb-6">
          <div className="p-4 bg-linear-to-br from-yellow-400/20 to-pink-400/20 rounded-2xl border border-white/20">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>

        <div className="text-5xl text-center font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-yellow-400">
          {value}
          <span className="text-3xl text-center text-gray-300 ml-2">{suffix}</span>
        </div>
      </div>
    </motion.div>
  );
}