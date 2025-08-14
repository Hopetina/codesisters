import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { User } from "@/types/user";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy, Medal, Award, Crown, Star, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LoadingTips from "@/components/shared/LoadingTips";
import QuickVerifyScanner from "@/components/verification/QuickVerifyScanner";
import { Badge } from "@/components/ui/badge";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<User[]>([]);
  const navigate = useNavigate();
  const getUserDisplayName = (user: User) => {
    if (user.profile?.fullName) return user.profile.fullName;
    if (user.fullName) return user.fullName;
    if (user.name) return user.name;
    return user.email;
  };
  const getUserCourse = (user: User) => {
    return user.profile?.course || user.course || "Course not specified";
  };
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Trophy className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-amber-600" />;
      default:
        return <Star className="h-5 w-5 text-blue-500" />;
    }
  };
  const getRankBadge = (rank: number) => {
    if (rank === 1) return "🥇 Champion";
    if (rank === 2) return "🥈 Runner-up";
    if (rank === 3) return "🥉 Third Place";
    if (rank <= 10) return "⭐ Top 10";
    return "🌟 Participant";
  };
  const getCardClass = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-300 shadow-lg";
    if (rank === 2) return "bg-gradient-to-r from-gray-50 to-slate-50 border-gray-300 shadow-md";
    if (rank === 3) return "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-300 shadow-md";
    return "bg-white border-gray-200 hover:shadow-md transition-shadow";
  };
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <nav className="w-full bg-white/70 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <a href="/" className="text-xl font-semibold text-blue-600">
                CODESISTERS PLATFORM
              </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <QuickVerifyScanner />
              <Button 
                variant="ghost" 
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto py-8 px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-8 w-8 text-yellow-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leaderboard
            </h1>
            <Trophy className="h-8 w-8 text-yellow-500" />
          </div>
          <p className="text-gray-600 text-lg">Celebrating our top performers and their achievements</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Zap className="h-5 w-5 text-blue-500" />
            <span className="text-blue-600 font-medium">{leaderboard.length} Active Participants</span>
          </div>
        </div>

        {/* Full Leaderboard as a horizontal row */}
        {leaderboard.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">📊 Full Rankings</h2>
            <div className="overflow-x-auto">
              <div className="flex flex-row gap-4 py-4">
                {leaderboard.map((user, index) => (
                  <div
                    key={user.id}
                    className={`min-w-[260px] ${getCardClass(index + 1)} rounded-xl p-4 border-2 flex flex-col items-center justify-center`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {getRankIcon(index + 1)}
                      <span className="font-bold text-gray-700">#{index + 1}</span>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                      {getUserDisplayName(user).charAt(0).toUpperCase()}
                    </div>
                    <p className="font-semibold text-gray-800 text-center">{getUserDisplayName(user)}</p>
                    <p className="text-gray-600 text-sm text-center mb-2">{getUserCourse(user)}</p>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <>
                        <Star className="h-4 w-4 text-blue-500" />
                        <span className="font-bold text-lg text-blue-600">{user.points || 0}</span>
                      </>
                    </div>
                    <Badge variant="outline" className="text-xs mt-1">
                      {getRankBadge(index + 1)}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No participants found</p>
          </div>
        )}
      </main>
  </div>
}

export default Leaderboard;
