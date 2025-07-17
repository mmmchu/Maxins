import { useNavigate } from "react-router-dom";
import { 
  Home, 
  QrCode, 
  User, 
  LogOut,
  Bell,
  DollarSign,
  History
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Loans = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/merchant-dashboard" },
    { icon: QrCode, label: "QR Payment", path: "/qr-payment" },
    { icon: DollarSign, label: "Loans", active: true, path: "/loans" },
    { icon: History, label: "Transaction History", path: "/transaction-history" }
  ];

  const notifications = [
    {
      id: 1,
      message: "You are eligible to apply for a loan!",
      type: "success"
    },
    {
      id: 2,
      message: "Transaction today is RM1,245.25 today!",
      type: "info"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-80 bg-card border-r border-border p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <img 
              src="/uploads/e71d6aef-f1e6-48ed-bcd4-abb4015452cb.png" 
              alt="NiagaNow" 
              className="w-8 h-8"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">NiagaNow</h2>
            <p className="text-sm text-muted-foreground">Digital Banking</p>
          </div>
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start h-12 ${
                item.active 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => item.path && navigate(item.path)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Button>
          ))}
        </nav>

        {/* User Profile Section */}
        <div className="mt-auto pt-6 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start p-0 h-auto mb-4"
            onClick={() => navigate("/profile")}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">Mary</p>
                <p className="text-sm text-muted-foreground">Nyonya Kuih Seller</p>
              </div>
            </div>
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-muted-foreground hover:text-foreground"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 mr-3" />
            Log Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header with Notification Bell */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Loans</h1>
            <p className="text-muted-foreground">Explore our loan options</p>
          </div>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                  {notifications.length}
                </Badge>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Notifications</h3>
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-foreground">{notification.message}</p>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </div>
        </div>

        {/* Loans Content */}
        <Card>
          <CardHeader>
            <CardTitle>Available Loan Options</CardTitle>
            <CardDescription>Check out our competitive loan options</CardDescription>
          </CardHeader>
          <CardContent>
            <p>No loan options available at the moment. Please check back later.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Loans;
