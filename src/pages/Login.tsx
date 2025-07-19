import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Shield, Smartphone, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import bankingHero from "@/assets/banking-hero.jpg";

const Login = () => {
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    businessName: "",
    phoneNumber: "",
    icNumber: "",
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

  const handleLogin = () => {
    if (loginData.email === "test@gmail.com" && loginData.password === "12345678Maxins*") {
      window.location.href = "/merchant-dashboard";
    } else {
      alert("Invalid credentials. Use test@gmail.com and 12345678Maxins*");
    }
  };

  const handleSignup = () => {
    if (signupData.phoneNumber === "0123456789" && signupData.businessRegNumber === "0123456789123") {
      window.location.href = "/merchant-dashboard";
    } else {
      alert("Please use test data: Phone: 0123456789, Business Reg: 0123456789123");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Hero Section */}
        <div className="hidden lg:block space-y-6 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/uploads/e71d6aef-f1e6-48ed-bcd4-abb4015452cb.png"
                alt="NiagaNow Logo"
                className="h-8 w-8 object-contain"
              />
              <h1 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                NiagaNow
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
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

        {/* Login / Signup Form */}
        <div className="w-full max-w-2xl mx-auto animate-slide-up">
          <Card className="shadow-card border-border">
            <CardHeader className="space-y-2 text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold">{t("welcomeToNiagaNow")}</CardTitle>
              <CardDescription>{t("secureBinding")}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">{t("login")}</TabsTrigger>
                  <TabsTrigger value="signup">{t("signup")}</TabsTrigger>
                </TabsList>

                {/* LOGIN TAB */}
                <TabsContent value="login" className="space-y-4 min-h-[400px]">
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("emailAddress")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t("enterEmail")}
                        value={loginData.email}
                        onChange={handleLoginChange}
                        className="h-11"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">{t("password")}</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder={t("enterPassword")}
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
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm pt-2">
                    <Link
                      to="/forgot-password"
                      className="text-primary hover:text-primary-glow transition-colors"
                    >
                      {t("forgotPassword")}
                    </Link>
                  </div>

                  <div className="pt-4">
                    <Button variant="banking" className="w-full h-11 text-base" onClick={handleLogin}>
                      {t("signIn")}
                    </Button>
                  </div>

                  <div className="text-xs text-center text-muted-foreground pt-2">{t("testCredentials")}</div>
                </TabsContent>

                {/* SIGNUP TAB */}
                <TabsContent value="signup" className="space-y-4 min-h-[400px]">
                  <div className="space-y-4 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("fullName")}</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder={t("enterFullName")}
                          value={signupData.name}
                          onChange={handleSignupChange}
                          className="h-11"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="businessName">{t("businessName")}</Label>
                        <Input
                          id="businessName"
                          name="businessName"
                          type="text"
                          placeholder={t("enterBusinessName")}
                          value={signupData.businessName}
                          onChange={handleSignupChange}
                          className="h-11"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("emailAddress")}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={t("enterEmail")}
                          value={signupData.email}
                          onChange={handleSignupChange}
                          className="h-11"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="icNumber">{t("icNumber")}</Label>
                        <Input
                          id="icNumber"
                          name="icNumber"
                          type="text"
                          placeholder={t("enterIcNumber")}
                          value={signupData.icNumber}
                          onChange={handleSignupChange}
                          className="h-11"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber">{t("phoneNumber")}</Label>
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="tel"
                          placeholder={t("enterPhoneNumber")}
                          value={signupData.phoneNumber}
                          onChange={handleSignupChange}
                          className="h-11"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="businessRegNumber">{t("businessRegNumber")}</Label>
                        <Input
                          id="businessRegNumber"
                          name="businessRegNumber"
                          type="text"
                          placeholder={t("enterBusinessRegNumber")}
                          value={signupData.businessRegNumber}
                          onChange={handleSignupChange}
                          className="h-11"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="banking" className="w-full h-11 text-base" onClick={handleSignup}>
                      {t("createAccount")}
                    </Button>
                  </div>

                  <div className="text-xs text-center text-muted-foreground pt-2">{t("testData")}</div>
                </TabsContent>
              </Tabs>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-center text-muted-foreground">{t("protectedBySecurity")}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
