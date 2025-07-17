
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Home, 
  QrCode, 
  User, 
  LogOut,
  Bell,
  DollarSign,
  History,
  Edit,
  Save,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const [userProfile, setUserProfile] = useState({
    name: "Mary",
    icNumber: "980123-14-5678",
    idType: "IC",
    gender: "Female",
    telephoneNumber: "0123456789",
    email: "mary@example.com",
    businessType: "Nyonya Kuih Seller",
    businessRegistrationNumber: "0123456789123"
  });

  const handleLogout = () => {
    navigate("/login");
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a database
    console.log("Profile updated:", userProfile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original values if needed
  };

  const handleInputChange = (field: string, value: string) => {
    setUserProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/merchant-dashboard" },
    { icon: QrCode, label: "QR Payment", path: "/qr-payment" },
    { icon: DollarSign, label: "Loans", path: "/loans" },
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
              variant="ghost"
              className="w-full justify-start h-12 text-muted-foreground hover:text-foreground"
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
            className="w-full justify-start p-0 h-auto mb-4 bg-primary/10"
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
        <div className="max-w-7xl mx-auto">
          {/* Header with Notification Bell */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Profile</h1>
              <p className="text-muted-foreground">Manage your personal information</p>
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
            </Popover>
          </div>

          {/* Profile Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Your account details and personal information</CardDescription>
                </div>
                <div className="flex gap-2">
                  {isEditing ? (
                    <>
                      <Button variant="outline" size="sm" onClick={handleCancel}>
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                      <Button size="sm" onClick={handleSave}>
                        <Save className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Full Name</Label>
                    {isEditing ? (
                      <Input
                        value={userProfile.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="mt-1"
                      />
                    ) : (
                      <p className="text-foreground mt-1">{userProfile.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">IC Number</Label>
                    {isEditing ? (
                      <Input
                        value={userProfile.icNumber}
                        onChange={(e) => handleInputChange('icNumber', e.target.value)}
                        className="mt-1"
                      />
                    ) : (
                      <p className="text-foreground mt-1">{userProfile.icNumber}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">ID Type</Label>
                    {isEditing ? (
                      <Select value={userProfile.idType} onValueChange={(value) => handleInputChange('idType', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="IC">IC</SelectItem>
                          <SelectItem value="Passport">Passport</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="text-foreground mt-1">{userProfile.idType}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Gender</Label>
                    {isEditing ? (
                      <Select value={userProfile.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="text-foreground mt-1">{userProfile.gender}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Telephone Number</Label>
                    {isEditing ? (
                      <Input
                        value={userProfile.telephoneNumber}
                        onChange={(e) => handleInputChange('telephoneNumber', e.target.value)}
                        className="mt-1"
                      />
                    ) : (
                      <p className="text-foreground mt-1">{userProfile.telephoneNumber}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                    {isEditing ? (
                      <Input
                        value={userProfile.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-1"
                      />
                    ) : (
                      <p className="text-foreground mt-1">{userProfile.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Business Type</Label>
                    {isEditing ? (
                      <Input
                        value={userProfile.businessType}
                        onChange={(e) => handleInputChange('businessType', e.target.value)}
                        className="mt-1"
                      />
                    ) : (
                      <p className="text-foreground mt-1">{userProfile.businessType}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Business Registration Number</Label>
                    {isEditing ? (
                      <Input
                        value={userProfile.businessRegistrationNumber}
                        onChange={(e) => handleInputChange('businessRegistrationNumber', e.target.value)}
                        className="mt-1"
                      />
                    ) : (
                      <p className="text-foreground mt-1">{userProfile.businessRegistrationNumber}</p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
