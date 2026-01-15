import {
  Code2,
  Trophy,
  Users,
  Zap,
  ChevronRight,
  Play,
  Star,
  Moon,
  Sun,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { onboardUser } from "@/modules/auth/actions";

export default async function Home() {
  await onboardUser();

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Interactive Coding",
      description:
        "Practice with real-world coding challenges and get instant feedback on your solutions.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Track Progress",
      description:
        "Monitor your improvement with detailed analytics and achievement systems.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Community",
      description:
        "Learn from thousands of developers worldwide and share your knowledge.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Feedback",
      description:
        "Get instant feedback on your solutions with detailed explanations.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Problems Solved" },
    { number: "10K+", label: "Active Developers" },
    { number: "25+", label: "Programming Languages" },
    { number: "98%", label: "Success Rate" },
  ];

  const problemCategories = [
    {
      level: "Beginner",
      title: "Easy Problems",
      description:
        "Perfect for getting started with basic programming concepts and syntax.",
      count: "500+ Problems",
      color: "green",
    },
    {
      level: "Intermediate",
      title: "Medium Problems",
      description:
        "Challenge yourself with data structures and algorithm problems.",
      count: "800+ Problems",
      color: "cyan",
    },
    {
      level: "Advanced",
      title: "Hard Problems",
      description:
        "Master complex algorithms and compete in programming contests.",
      count: "300+ Problems",
      color: "green",
    },
  ];

  return (
    <div className="min-h-screen  transition-colors mt-24">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-8 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900"
          >
            <Star className="w-4 h-4 mr-2" />
            Join 10,000+ developers already coding
          </Badge>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-8">
            Master{" "}
            <span className="relative inline-block">
              <span className="px-6 py-3 bg-green-500 dark:bg-green-400 text-white dark:text-gray-900 rounded-2xl transform -rotate-1 inline-block shadow-lg">
                Problem
              </span>
            </span>{" "}
            Solving
            <br />
            with{" "}
            <span className="relative inline-block">
              <span className="px-6 py-3 bg-cyan-400 dark:bg-cyan-500 text-white rounded-2xl transform rotate-1 inline-block shadow-lg">
                Code
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Challenge yourself with thousands of coding problems, compete with
            developers worldwide, and accelerate your programming journey with
            real-time feedback and expert solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 dark:bg-green-400 dark:hover:bg-green-500 text-white dark:text-gray-900 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Coding Now
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-cyan-300 dark:border-cyan-600 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-950"
            >
              Browse Problems
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 bg-gray-50 dark:bg-neutral-900/50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything you need to{" "}
              <span className="text-green-600 dark:text-green-400">excel</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our platform provides comprehensive tools and resources to help
              you become a better programmer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-200 border-gray-200 dark:border-gray-700"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 ${
                      index % 2 === 0
                        ? "bg-green-100 dark:bg-green-900"
                        : "bg-cyan-100 dark:bg-cyan-900"
                    } rounded-xl flex items-center justify-center ${
                      index % 2 === 0
                        ? "text-green-600 dark:text-green-400"
                        : "text-cyan-600 dark:text-cyan-400"
                    } mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Categories */}
      <section id="problems" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Choose your{" "}
              <span className="text-cyan-600 dark:text-cyan-400">
                challenge
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From beginner-friendly puzzles to advanced algorithmic challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problemCategories.map((category, index) => (
              <Card
                key={index}
                className={`border-2 hover:shadow-lg transition-all duration-200 ${
                  category.color === "green"
                    ? "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700"
                    : "bg-cyan-50 dark:bg-cyan-950/30 border-cyan-200 dark:border-cyan-800 hover:border-cyan-300 dark:hover:border-cyan-700"
                }`}
              >
                <CardHeader>
                  <Badge
                    variant="secondary"
                    className={`w-fit ${
                      category.color === "green"
                        ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                        : "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300"
                    }`}
                  >
                    {category.level}
                  </Badge>
                  <CardTitle className="text-gray-900 dark:text-white">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {category.description}
                  </CardDescription>
                  <div
                    className={`font-semibold ${
                      category.color === "green"
                        ? "text-green-600 dark:text-green-400"
                        : "text-cyan-600 dark:text-cyan-400"
                    }`}
                  >
                    {category.count}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-300  dark:from-green-600 dark:to-cyan-600 rounded-md">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to start your coding journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of developers who are improving their skills every
            day
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
          >
            Get Started for Free
          </Button>
        </div>
      </section>
      <footer className="min-h-25 w-full flex justify-center items-center">
        Created By Sahin Mallik With ❤️.
      </footer>
    </div>
  );
}
