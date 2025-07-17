import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  QrCode, 
  CreditCard, 
  Smartphone, 
  Users, 
  TrendingUp, 
  Leaf, 
  ShoppingBag, 
  FileText, 
  IdCard,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Zap,
  Shield,
  Gift
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Digitize Payments, Reward Sustainability
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Empower your MSME with seamless digital payments while rewarding customers with eco-points for sustainable choices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-muted-foreground">Active Merchants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">₹50M+</div>
                <div className="text-muted-foreground">Transactions Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2M+</div>
                <div className="text-muted-foreground">Eco-Points Earned</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simplify Every Payment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Accept payments effortlessly with our comprehensive digital payment solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">QR Code Payments</CardTitle>
                <CardDescription className="text-base">
                  Generate dynamic QR codes for instant, contactless payments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Instant payment processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Works with all UPI apps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Real-time notifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Tap-to-Pay</CardTitle>
                <CardDescription className="text-base">
                  NFC-enabled contactless payments for modern customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Lightning-fast transactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Enhanced security</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Works with cards & phones</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Buy Now, Pay Later</CardTitle>
                <CardDescription className="text-base">
                  Flexible payment options to increase customer spending
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>0% interest options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Instant approvals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Higher basket values</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Benefits for Everyone</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Creating value for both merchants and customers in the digital payment ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Merchant Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">For Merchants</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Increase Sales</h4>
                    <p className="text-muted-foreground">Digital payments increase average transaction value by 30%</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Faster Transactions</h4>
                    <p className="text-muted-foreground">Process payments in seconds, reduce waiting times</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Secure & Reliable</h4>
                    <p className="text-muted-foreground">Bank-grade security with real-time fraud protection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">For Customers</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Earn Eco-Points</h4>
                    <p className="text-muted-foreground">Get rewarded for sustainable shopping choices</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Convenient Payments</h4>
                    <p className="text-muted-foreground">Pay with any method - QR, tap, or traditional cards</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Exclusive Offers</h4>
                    <p className="text-muted-foreground">Access special deals and cashback opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Tools Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple Business Tools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run your business efficiently in one integrated platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Smart POS System</CardTitle>
                <CardDescription className="text-base">
                  All-in-one point of sale solution for retail and restaurants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Inventory management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Sales analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Customer management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Digital Invoicing</CardTitle>
                <CardDescription className="text-base">
                  Create, send, and track professional invoices instantly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Automated reminders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Payment tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Tax compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IdCard className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">MyKad Onboarding</CardTitle>
                <CardDescription className="text-base">
                  Instant customer verification and registration with MyKad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>OCR scanning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>KYC compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Secure data handling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eco-Points Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Earn <span className="text-primary">Eco-Points</span> for Sustainable Choices
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reward customers for environmentally conscious purchases and track your business's carbon impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Sustainable Products</h4>
                    <p className="text-muted-foreground">Customers earn extra points for eco-friendly purchases</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Community Impact</h4>
                    <p className="text-muted-foreground">Track collective environmental impact across your customer base</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Redeem Rewards</h4>
                    <p className="text-muted-foreground">Convert eco-points to discounts, vouchers, or donations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">CO₂ Impact Examples</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                      Organic
                    </Badge>
                    <span>Organic Coffee</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-600 font-medium">-0.5kg CO₂</div>
                    <div className="text-xs text-muted-foreground">+50 points</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      Reusable
                    </Badge>
                    <span>Bamboo Water Bottle</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-600 font-medium">-2.1kg CO₂</div>
                    <div className="text-xs text-muted-foreground">+210 points</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                      Local
                    </Badge>
                    <span>Local Vegetables</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-600 font-medium">-0.8kg CO₂</div>
                    <div className="text-xs text-muted-foreground">+80 points</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1,250 Points</div>
                    <div className="text-sm text-muted-foreground">Available to redeem</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EcoPay</h3>
              <p className="text-muted-foreground mb-4">
                Digitizing payments while rewarding sustainable choices for a better tomorrow.
              </p>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">QR Payments</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Tap-to-Pay</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">BNPL</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">POS System</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@ecopay.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+60 3-1234 5678</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Kuala Lumpur, Malaysia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 EcoPay. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
