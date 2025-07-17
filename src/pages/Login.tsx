
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Shield, Smartphone, CreditCard, Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import bankingHero from "@/assets/banking-hero.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    name: "",
    gender: "",
    email: "",
    businessName: "",
    phoneNumber: "",
    icNumber: "",
    icFile: null as File | null,
    businessRegNumber: "",
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenderChange = (value: string) => {
    setSignupData({
      ...signupData,
      gender: value,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setSignupData({
        ...signupData,
        icFile: file,
      });
    }
  };

  const handleLogin = () => {
    // Test credentials: test@gmail.com / 12345678Maxins*
    if (loginData.email === "test@gmail.com" && loginData.password === "12345678Maxins*") {
      window.location.href = "/merchant-dashboard";
    } else {
      alert("Invalid credentials. Use test@gmail.com and 12345678Maxins*");
    }
  };

  const handleSignup = () => {
    // Test data validation
    if (signupData.phoneNumber === "0123456789" && 
        signupData.businessRegNumber === "0123456789123" && 
        signupData.icFile) {
      window.location.href = "/merchant-dashboard";
    } else {
      alert("Please use test data: Phone: 0123456789, Business Reg: 0123456789123, and upload a PDF");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Hero Section */}
        <div className="hidden lg:block space-y-6 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/uploads/e71d6aef-f1e6-48ed-bcd4-abb4015452cb.png" 
                alt="NiagaNow Logo" 
                className="h-12 w-12 object-contain"
              />
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                NiagaNow
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experience the future of banking with our comprehensive digital platform. 
              Manage your finances, make payments, and grow your business with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border shadow-soft">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Bank-Level Security</h3>
                <p className="text-sm text-muted-foreground">256-bit encryption</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border shadow-soft">
              <Smartphone className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Mobile First</h3>
                <p className="text-sm text-muted-foreground">Seamless experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border shadow-soft">
              <CreditCard className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Instant Payments</h3>
                <p className="text-sm text-muted-foreground">QR & NFC support</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border shadow-soft">
              <div className="h-8 w-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                24/7
              </div>
              <div>
                <h3 className="font-semibold">Always Available</h3>
                <p className="text-sm text-muted-foreground">Round the clock</p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-hover">
            <img 
              src={bankingHero} 
              alt="Banking Hero" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>

        {/* Login/Signup Form */}
        <div className="w-full max-w-md mx-auto animate-slide-up">
          <Card className="shadow-card border-border">
            <CardHeader className="space-y-2 text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold">Welcome to NiagaNow</CardTitle>
              <CardDescription>
                Your secure banking platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        className="h-11"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={loginData.password}
                          onChange={handleLoginChange}
                          className="h-11 pr-10"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <Link 
                      to="/forgot-password" 
                      className="text-primary hover:text-primary-glow transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button 
                    variant="banking" 
                    className="w-full h-11 text-base"
                    onClick={handleLogin}
                  >
                    Sign In Securely
                  </Button>

                  <div className="text-xs text-center text-muted-foreground">
                    Test credentials: test@gmail.com / 12345678Maxins*
                  </div>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={signupData.name}
                        onChange={handleSignupChange}
                        className="h-11"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select onValueChange={handleGenderChange} value={signupData.gender}>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select your gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={signupData.email}
                        onChange={handleSignupChange}
                        className="h-11"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        type="text"
                        placeholder="Enter your business name"
                        value={signupData.businessName}
                        onChange={handleSignupChange}
                        className="h-11"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={signupData.phoneNumber}
                        onChange={handleSignupChange}
                        className="h-11"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="icNumber">IC Number (MyKad)</Label>
                      <Input
                        id="icNumber"
                        name="icNumber"
                        type="text"
                        placeholder="Enter your IC number"
                        value={signupData.icNumber}
                        onChange={handleSignupChange}
                        className="h-11"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="icFile">Upload IC (MyKad) PDF</Label>
                      <div className="relative">
                        <Input
                          id="icFile"
                          type="file"
                          accept=".pdf"
                          onChange={handleFileUpload}
                          className="h-11 cursor-pointer"
                          required
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          {signupData.icFile ? (
                            <FileText className="h-4 w-4 text-primary" />
                          ) : (
                            <Upload className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                      {signupData.icFile && (
                        <p className="text-xs text-primary">
                          Selected: {signupData.icFile.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessRegNumber">Business Registration Number</Label>
                      <Input
                        id="businessRegNumber"
                        name="businessRegNumber"
                        type="text"
                        placeholder="Enter your business registration number"
                        value={signupData.businessRegNumber}
                        onChange={handleSignupChange}
                        className="h-11"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    variant="banking" 
                    className="w-full h-11 text-base"
                    onClick={handleSignup}
                  >
                    Create Account
                  </Button>

                  <div className="text-xs text-center text-muted-foreground">
                    Test data: Phone: 0123456789, Business Reg: 0123456789123, Upload any PDF
                  </div>
                </TabsContent>
              </Tabs>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-center text-muted-foreground">
                  Protected by bank-level security. Your data is encrypted and safe.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
