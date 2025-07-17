import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  Building2, 
  CreditCard, 
  QrCode, 
  User, 
  Settings, 
  Menu,
  X,
  PiggyBank,
  TrendingUp,
  Send,
  ArrowDownRight,
  ArrowUpRight,
  Eye,
  EyeOff
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(true);
  const location = useLocation();

  const navigationItems = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "Register Business", url: "/business", icon: Building2 },
    { title: "Add IC/MyKad", url: "/verification", icon: CreditCard },
    { title: "QR Payment", url: "/qr-payment", icon: QrCode },
    { title: "Profile", url: "/profile", icon: User },
    { title: "Settings", url: "/settings", icon: Settings },
  ];

  const quickActions = [
    { title: "Send Money", icon: Send, description: "Transfer to contacts", color: "bg-blue-500" },
    { title: "Pay Bills", icon: CreditCard, description: "Utilities & more", color: "bg-green-500" },
    { title: "Generate QR", icon: QrCode, description: "Accept payments", color: "bg-purple-500" },
    { title: "Investments", icon: TrendingUp, description: "Grow your wealth", color: "bg-orange-500" },
  ];

  const recentTransactions = [
    { id: 1, type: "received", amount: "+RM 250.00", from: "Salary Deposit", date: "Today", icon: ArrowDownRight, color: "text-green-600" },
    { id: 2, type: "sent", amount: "-RM 45.50", from: "Grab Food", date: "Yesterday", icon: ArrowUpRight, color: "text-red-600" },
    { id: 3, type: "received", amount: "+RM 120.00", from: "QR Payment", date: "2 days ago", icon: ArrowDownRight, color: "text-green-600" },
    { id: 4, type: "sent", amount: "-RM 89.00", from: "Shopee Purchase", date: "3 days ago", icon: ArrowUpRight, color: "text-red-600" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-border bg-card">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-semibold">Banking Dashboard</h1>
        <div className="w-10" />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform lg:transform-none
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <PiggyBank className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-bold text-foreground">MyBank</h2>
                  <p className="text-xs text-muted-foreground">Digital Banking</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.url}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg transition-all
                    ${isActive(item.url) 
                      ? 'bg-primary text-primary-foreground shadow-soft' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }
                  `}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.title}</span>
                </NavLink>
              ))}
            </nav>

            {/* User Info */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  JD
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground truncate">John Doe</p>
                  <p className="text-xs text-muted-foreground truncate">john.doe@email.com</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="p-6 space-y-6">
            {/* Welcome Section */}
            <div className="space-y-2">
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                Welcome back, John! 👋
              </h1>
              <p className="text-muted-foreground">
                Here's what's happening with your accounts today.
              </p>
            </div>

            {/* Account Balance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-card border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Main Account</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => setBalanceVisible(!balanceVisible)}
                  >
                    {balanceVisible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">
                    {balanceVisible ? "RM 12,435.67" : "RM •••••••"}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Available Balance
                  </p>
                  <Badge variant="outline" className="mt-2">
                    ••1234
                  </Badge>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Savings Account</CardTitle>
                  <PiggyBank className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">
                    {balanceVisible ? "RM 8,750.23" : "RM •••••••"}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +2.5% interest rate
                  </p>
                  <Badge variant="outline" className="mt-2 bg-green-50 text-green-700 border-green-200">
                    Growing
                  </Badge>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Spending</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">RM 2,891.45</div>
                  <p className="text-xs text-muted-foreground">
                    This month
                  </p>
                  <Badge variant="outline" className="mt-2 bg-blue-50 text-blue-700 border-blue-200">
                    On track
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Quick Actions</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action) => (
                  <Card key={action.title} className="cursor-pointer hover:shadow-hover transition-all transform hover:scale-105 border-border">
                    <CardContent className="p-4 text-center space-y-3">
                      <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto`}>
                        <action.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-foreground">{action.title}</h3>
                        <p className="text-xs text-muted-foreground">{action.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">Recent Transactions</h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <Card className="shadow-card border-border">
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full bg-muted`}>
                            <transaction.icon className={`h-4 w-4 ${transaction.color}`} />
                          </div>
                          <div>
                            <p className="font-medium text-sm text-foreground">{transaction.from}</p>
                            <p className="text-xs text-muted-foreground">{transaction.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold text-sm ${transaction.color}`}>
                            {transaction.amount}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;