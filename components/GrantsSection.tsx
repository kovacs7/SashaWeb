import {
  Award,
  Calendar,
  DollarSign,
  Users,
  Trophy,
  Star,
  Medal,
  Crown,
} from "lucide-react";
import {Button} from "@/components/ui/button";

// Grant Card Component
interface GrantCardProps {
  icon: React.ReactNode;
  title: string;
  amount: string;
  date: string;
  description: string;
  organization: string;
  status?: "completed" | "ongoing" | "pending";
}

const GrantCard = ({
  icon,
  title,
  amount,
  date,
  description,
  organization,
  status = "completed",
}: GrantCardProps) => {
  const statusColors = {
    completed:
      "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
    ongoing: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    pending:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 border border-gray-100 dark:border-gray-700">
      {/* Header with Icon and Status */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[#FB930Bff]/10 rounded-lg">{icon}</div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-2">
              {title}
            </h3>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      {/* Organization */}
      <div className="mb-3">
        <p className="text-sm font-medium text-[#FB930Bff]">{organization}</p>
      </div>

      {/* Amount and Date */}
      <div className="flex items-center justify-between mb-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-green-600" />
          <span className="font-bold text-green-600 dark:text-green-400">
            {amount}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {date}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// Main Grants Section
export const GrantsSection = () => {
  const grants = [
    {
      icon: <Crown className="h-6 w-6 text-[#FB930Bff]" />,
      title: "Advanced Robotics Innovation Grant",
      amount: "$500,000",
      date: "2024",
      organization: "National Science Foundation",
      description:
        "Funding for breakthrough research in AI-powered robotic systems with natural language processing capabilities for industrial automation.",
      status: "ongoing",
    },
    {
      icon: <Trophy className="h-6 w-6 text-[#FB930Bff]" />,
      title: "Technology Innovation Award",
      amount: "$250,000",
      date: "2023",
      organization: "Department of Technology",
      description:
        "Recognition and funding for innovative AI solutions that bridge the gap between human communication and machine understanding.",
      status: "completed",
    },
    {
      icon: <Medal className="h-6 w-6 text-[#FB930Bff]" />,
      title: "Small Business Innovation Research",
      amount: "$150,000",
      date: "2023",
      organization: "Small Business Administration",
      description:
        "SBIR Phase II funding for developing next-generation human-robot interaction interfaces for manufacturing environments.",
      status: "completed",
    },
    {
      icon: <Star className="h-6 w-6 text-[#FB930Bff]" />,
      title: "Green Technology Initiative",
      amount: "$200,000",
      date: "2024",
      organization: "Environmental Protection Agency",
      description:
        "Grant for developing sustainable robotics solutions that reduce energy consumption in automated systems.",
      status: "ongoing",
    },
    {
      icon: <Award className="h-6 w-6 text-[#FB930Bff]" />,
      title: "Industry Partnership Grant",
      amount: "$100,000",
      date: "2022",
      organization: "Manufacturing Innovation Hub",
      description:
        "Collaborative funding for research partnerships with leading manufacturing companies to implement AI-driven automation solutions.",
      status: "completed",
    },
    {
      icon: <Users className="h-6 w-6 text-[#FB930Bff]" />,
      title: "Workforce Development Grant",
      amount: "$75,000",
      date: "2024",
      organization: "Department of Labor",
      description:
        "Training and development programs for workers transitioning to AI-enhanced manufacturing environments.",
      status: "pending",
    },
  ];

  const totalFunding = grants.reduce((sum, grant) => {
    const amount = parseInt(grant.amount.replace(/[$,]/g, ""));
    return sum + amount;
  }, 0);

  return (
    <section id="grants" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-8 w-8 md:block hidden text-[#FB930Bff]" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Grants & Recognition
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto mb-6">
            We're proud to be recognized by leading organizations for our
            innovative work in AI-powered robotics and automation solutions.
          </p>

          {/* Total Funding Stats */}
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-sm mx-auto border border-gray-200 ">
            <div className="flex items-center gap-3 justify-center">
              <DollarSign className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-600 ">
                  Total Funding Received
                </p>
                <p className="text-2xl font-bold text-green-600 ">
                  ${totalFunding.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grants.map((grant, index) => (
            <GrantCard
              key={index}
              icon={grant.icon}
              title={grant.title}
              amount={grant.amount}
              date={grant.date}
              organization={grant.organization}
              description={grant.description}
              status={grant.status as "completed" | "ongoing" | "pending"}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Partnership?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for collaboration opportunities with research
              institutions, government agencies, and industry partners.
            </p>
            <Button className="bg-[#FB930Bff] hover:bg-[#FB930Bff]/75 text-yellow-100 px-8 py-3">
              Contact Us for Partnerships
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


