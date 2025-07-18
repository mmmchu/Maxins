
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, ExternalLink } from "lucide-react";

interface FormData {
  businessName: string;
  establishedYear: string;
  businessType: string;
  businessSector: string;
  businessLocation: string;
  fundingPurpose: string;
  fundingAmount: string;
}

interface LoanEligibilityFormProps {
  onClose: () => void;
}

const LoanEligibilityForm = ({ onClose }: LoanEligibilityFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    establishedYear: "",
    businessType: "",
    businessSector: "",
    businessLocation: "",
    fundingPurpose: "",
    fundingAmount: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));

    setIsSubmitting(false);
    setShowResult(true);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const banks = [
    {
      name: "Maybank",
      programs: ["SME Growth Financing", "Equipment Financing", "Working Capital Term Loan"],
      contact: "1-300-88-6688",
      website: "https://www.maybank2u.com.my/sme"
    },
    {
      name: "CIMB Bank",
      programs: ["BizChannel@SME", "SME Equipment Financing", "Trade Financing"],
      contact: "03-6204 7788",
      website: "https://www.cimb.com.my/sme"
    },
    {
      name: "Public Bank",
      programs: ["SME Term Loan", "Trade Finance", "Invoice Financing"],
      contact: "03-2176 8000",
      website: "https://www.pbebank.com/sme"
    }
  ];

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl text-green-600">Congratulations!</CardTitle>
            <CardDescription>You are eligible for a business loan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Your Application Summary:</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Business Name:</strong> {formData.businessName}</p>
                <p><strong>Established:</strong> {formData.establishedYear}</p>
                <p><strong>Business Type:</strong> {formData.businessType}</p>
                <p><strong>Sector:</strong> {formData.businessSector}</p>
                <p><strong>Location:</strong> {formData.businessLocation}</p>
                <p><strong>Funding Purpose:</strong> {formData.fundingPurpose}</p>
                <p><strong>Funding Amount:</strong> {formData.fundingAmount}</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-4">Recommended Banks:</h3>
              <div className="space-y-4">
                {banks.map((bank, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-blue-900">{bank.name}</h4>
                      <Button variant="outline" size="sm" asChild>
                        <a href={bank.website} target="_blank" rel="noopener noreferrer">
                          Apply <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                    <div className="text-sm text-blue-700 space-y-1">
                      <p><strong>Programs:</strong> {bank.programs.join(", ")}</p>
                      <p><strong>Contact:</strong> {bank.contact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={onClose} className="flex-1">
                Continue to Dashboard
              </Button>
              <Button variant="outline" onClick={() => setShowResult(false)} className="flex-1">
                Back to Form
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Loan Eligibility Assessment</CardTitle>
          <CardDescription>
            Please fill out this questionnaire to check your eligibility for a business loan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Business Profile */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Business Profile</h3>
              
              <div className="space-y-2">
                <Label htmlFor="businessName">What is the name of your business?</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange("businessName", e.target.value)}
                  placeholder="Enter your business name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="establishedYear">What year was your business established?</Label>
                <Input
                  id="establishedYear"
                  type="number"
                  value={formData.establishedYear}
                  onChange={(e) => handleInputChange("establishedYear", e.target.value)}
                  placeholder="e.g., 2020"
                  min="1900"
                  max="2025"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>What type of business do you run?</Label>
                <RadioGroup
                  value={formData.businessType}
                  onValueChange={(value) => handleInputChange("businessType", value)}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sole-proprietorship" id="sole" />
                    <Label htmlFor="sole">Sole Proprietorship</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partnership" id="partnership" />
                    <Label htmlFor="partnership">Partnership</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sdn-bhd" id="sdn-bhd" />
                    <Label htmlFor="sdn-bhd">Sdn Bhd</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cooperative" id="cooperative" />
                    <Label htmlFor="cooperative">Cooperative</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="informal" id="informal" />
                    <Label htmlFor="informal">Informal</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>What is your business sector?</Label>
                <Select value={formData.businessSector} onValueChange={(value) => handleInputChange("businessSector", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select business sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="fnb">F&B</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="agriculture">Agriculture</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Where is your business located?</Label>
                <Select value={formData.businessLocation} onValueChange={(value) => handleInputChange("businessLocation", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="johor">Johor</SelectItem>
                    <SelectItem value="kedah">Kedah</SelectItem>
                    <SelectItem value="kelantan">Kelantan</SelectItem>
                    <SelectItem value="kuala-lumpur">Kuala Lumpur</SelectItem>
                    <SelectItem value="labuan">Labuan</SelectItem>
                    <SelectItem value="malacca">Malacca</SelectItem>
                    <SelectItem value="negeri-sembilan">Negeri Sembilan</SelectItem>
                    <SelectItem value="pahang">Pahang</SelectItem>
                    <SelectItem value="penang">Penang</SelectItem>
                    <SelectItem value="perak">Perak</SelectItem>
                    <SelectItem value="perlis">Perlis</SelectItem>
                    <SelectItem value="putrajaya">Putrajaya</SelectItem>
                    <SelectItem value="sabah">Sabah</SelectItem>
                    <SelectItem value="sarawak">Sarawak</SelectItem>
                    <SelectItem value="selangor">Selangor</SelectItem>
                    <SelectItem value="terengganu">Terengganu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Funding Requirements */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Funding Requirements</h3>
              
              <div className="space-y-3">
                <Label>Are you looking for funding for:</Label>
                <RadioGroup
                  value={formData.fundingPurpose}
                  onValueChange={(value) => handleInputChange("fundingPurpose", value)}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="working-capital" id="working-capital" />
                    <Label htmlFor="working-capital">Working Capital</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="equipment" id="equipment" />
                    <Label htmlFor="equipment">Equipment</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="marketing" id="marketing" />
                    <Label htmlFor="marketing">Marketing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="expansion" id="expansion" />
                    <Label htmlFor="expansion">Expansion</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="others" id="others" />
                    <Label htmlFor="others">Others</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>How much funding do you need (estimate)?</Label>
                <RadioGroup
                  value={formData.fundingAmount}
                  onValueChange={(value) => handleInputChange("fundingAmount", value)}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="less-than-5000" id="less-than-5000" />
                    <Label htmlFor="less-than-5000">&lt;RM5,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5000-10000" id="5000-10000" />
                    <Label htmlFor="5000-10000">RM5,000–RM10,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="10000-50000" id="10000-50000" />
                    <Label htmlFor="10000-50000">RM10,000–RM50,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="more-than-50000" id="more-than-50000" />
                    <Label htmlFor="more-than-50000">&gt;RM50,000</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Checking Eligibility...
                  </>
                ) : (
                  "Check Eligibility"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoanEligibilityForm;
