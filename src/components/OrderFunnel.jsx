import React, { useState } from 'react';
import { User, MapPin, Phone, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Gift, ShoppingCart, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import confetti from 'canvas-confetti';

export default function OrderFunnel({ products }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cityPincode: '',
    email: '',
    mobile: '',
    flavorPreference: ['Daily Comfort Cooking'],
    mealOccasion: ['Daily Lunch & Dinner Dals & Curries'],
    selectedProducts: ['turmeric-powder', 'chili-powder', 'sindhav-salt']
  });

  const steps = [
    {
      id: 'name',
      title: 'Your Name',
      subtitle: 'Tell us who we are packing pure spices for',
      icon: User,
      fields: ['name']
    },
    {
      id: 'address',
      title: 'Delivery Address',
      subtitle: 'Where should we ship your freshly sealed spice pack?',
      icon: MapPin,
      fields: ['address', 'cityPincode']
    },
    {
      id: 'contact',
      title: 'Contact Information',
      subtitle: 'We will confirm your order and delivery updates here',
      icon: Phone,
      fields: ['mobile', 'email']
    },
    {
      id: 'flavor',
      title: 'Cooking & Health Profile',
      subtitle: 'What culinary goals does your family prioritize? Select all that apply',
      icon: Sparkles,
      type: 'flavor'
    },
    {
      id: 'occasion',
      title: 'Kitchen & Meal Routine',
      subtitle: 'When do you use spices most? Select all that apply',
      icon: Gift,
      type: 'occasion'
    },
    {
      id: 'products',
      title: 'Select Your Pure Spices',
      subtitle: 'Choose which authentic spices you want in your custom box',
      icon: ShoppingCart,
      type: 'products'
    }
  ];

  const current = steps[currentStep];
  const progressPercent = ((currentStep + 1) / steps.length) * 100;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleToggleMulti = (field, option) => {
    setFormData(prev => {
      const list = prev[field] || [];
      const updated = list.includes(option)
        ? list.filter(item => item !== option)
        : [...list, option];
      return { ...prev, [field]: updated };
    });
  };

  const validateCurrentStep = () => {
    const newErrors = {};
    if (currentStep === 0) {
      if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    } else if (currentStep === 1) {
      if (!formData.address.trim()) newErrors.address = 'Please enter your street address';
      if (!formData.cityPincode.trim()) newErrors.cityPincode = 'Please enter city and pincode';
    } else if (currentStep === 2) {
      if (!formData.mobile.trim() || formData.mobile.length < 10) {
        newErrors.mobile = 'Please enter a valid 10 digit mobile number';
      }
    } else if (currentStep === 5) {
      if (formData.selectedProducts.length === 0) {
        newErrors.selectedProducts = 'Please select at least 1 spice variety';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        triggerConfetti();
        setSubmitted(true);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  const selectedItemsDetails = products.filter(p => formData.selectedProducts.includes(p.id));

  const getWhatsAppOrderText = () => {
    const itemsList = selectedItemsDetails.map(p => `- ${p.name} (${p.weight || 'Pack'})`).join('%0A');
    return encodeURIComponent(
      `Hello Bhagvat Prasadam!%0A%0AI would like to order a Custom Pure Spice Box:%0A%0A` +
      `*Customer Details:*%0A` +
      `- Name: ${formData.name}%0A` +
      `- Address: ${formData.address}, ${formData.cityPincode}%0A` +
      `- Phone: ${formData.mobile}%0A%0A` +
      `*Selected Spices:*%0A`
    ) + itemsList + encodeURIComponent(
      `%0A%0A*Health & Cooking Profile:* ${formData.flavorPreference.join(', ')}%0A` +
      `*Cooking Routine:* ${formData.mealOccasion.join(', ')}%0A%0A` +
      `Please confirm availability and dispatch details. Thank you!`
    );
  };

  return (
    <section id="order-funnel" className="py-14 sm:py-20 bg-[#f8faf8] border-b border-[#e2ebe5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#164e3d] font-1 tracking-tight">
            Build Your Pure Spice Box
          </h2>
          <p className="text-[#55695f] text-xs sm:text-sm mt-1.5">
            Configure your personalized pure spice selection in 6 quick steps for authentic home cooking.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e2ebe5] shadow-sm">
          
          {!submitted ? (
            <div>
              {/* Progress Bar & Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-bold text-[#55695f] mb-2">
                  <span>Step {currentStep + 1} of {steps.length}: {current.title}</span>
                  <span className="text-[#164e3d]">{Math.round(progressPercent)}% Completed</span>
                </div>
                <div className="w-full h-2 bg-[#eaf2ee] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#164e3d] transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Step Subtitle */}
              <div className="mb-6 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#eaf2ee] text-[#164e3d] flex items-center justify-center flex-shrink-0">
                  <current.icon className="w-5 h-5 text-[#c27803]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#182620]">{current.title}</h3>
                  <p className="text-xs text-[#55695f] mt-0.5">{current.subtitle}</p>
                </div>
              </div>

              {/* Step Content */}
              <div className="min-h-[220px]">
                
                {/* Step 0: Name */}
                {currentStep === 0 && (
                  <div>
                    <label className="block text-xs font-bold text-[#182620] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Nirav Dave"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#e2ebe5] focus:border-[#164e3d] outline-none text-[#182620] text-sm transition-colors"
                    />
                    {errors.name && <p className="text-red-600 text-xs mt-1 font-medium">{errors.name}</p>}
                  </div>
                )}

                {/* Step 1: Address */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#182620] uppercase tracking-wider mb-2">
                        Delivery Street / Flat Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="e.g. 402, Shivalik Heights, Bodakdev"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#e2ebe5] focus:border-[#164e3d] outline-none text-[#182620] text-sm transition-colors"
                      />
                      {errors.address && <p className="text-red-600 text-xs mt-1 font-medium">{errors.address}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#182620] uppercase tracking-wider mb-2">
                        City, State and Pincode *
                      </label>
                      <input
                        type="text"
                        name="cityPincode"
                        value={formData.cityPincode}
                        onChange={handleInputChange}
                        placeholder="e.g. Ahmedabad, Gujarat 380054"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#e2ebe5] focus:border-[#164e3d] outline-none text-[#182620] text-sm transition-colors"
                      />
                      {errors.cityPincode && <p className="text-red-600 text-xs mt-1 font-medium">{errors.cityPincode}</p>}
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Info */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#182620] uppercase tracking-wider mb-2">
                        WhatsApp Mobile Number *
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-3.5 text-[#55695f] font-bold text-sm">
                          +91
                        </span>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          placeholder="9876543210"
                          className="w-full pl-14 pr-4 py-3.5 rounded-xl border border-[#e2ebe5] focus:border-[#164e3d] outline-none text-[#182620] text-sm transition-colors"
                        />
                      </div>
                      {errors.mobile && <p className="text-red-600 text-xs mt-1 font-medium">{errors.mobile}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#182620] uppercase tracking-wider mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#e2ebe5] focus:border-[#164e3d] outline-none text-[#182620] text-sm transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Cooking & Health Profile */}
                {currentStep === 3 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'Daily Comfort Cooking', desc: 'Everyday healthy dals, sabzis, and family meals' },
                      { id: 'Ayurvedic & Immunity Healing', desc: 'High curcumin golden milk, soothing kadhas, and digestion' },
                      { id: 'Vrat & Fasting Essentials', desc: 'Satvik Sendha Namak for Navratri and Ekadashi' },
                      { id: 'Bold & Fiery Kathiyawadi', desc: 'Vibrant red curries, garlic chutneys, and sizzling tadkas' }
                    ].map(f => {
                      const isSelected = formData.flavorPreference.includes(f.id);
                      return (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => handleToggleMulti('flavorPreference', f.id)}
                          className={`p-4 rounded-2xl border text-left transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#eaf2ee] border-[#164e3d] text-[#164e3d]'
                              : 'bg-white border-[#e2ebe5] hover:border-[#164e3d]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-[#182620] text-sm">{f.id}</span>
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                              isSelected ? 'bg-[#164e3d] text-white' : 'border border-[#e2ebe5]'
                            }`}>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                          <p className="text-xs text-[#55695f]">{f.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Step 4: Meal Routine */}
                {currentStep === 4 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'Daily Lunch & Dinner Dals & Curries', desc: 'Aromatic pure haldi and red chili in daily meals' },
                      { id: 'Nightly Golden Turmeric Milk & Kadha', desc: 'Warm immune-boosting turmeric and sonth routines' },
                      { id: 'Winter & Festive Sweets', desc: 'Authentic unbleached sonth for Sonth Pak & laddoos' },
                      { id: 'Farali & Fasting Days', desc: 'Pristine Himalayan Sindhav Salt for pure fasts' }
                    ].map(occ => {
                      const isSelected = formData.mealOccasion.includes(occ.id);
                      return (
                        <button
                          key={occ.id}
                          type="button"
                          onClick={() => handleToggleMulti('mealOccasion', occ.id)}
                          className={`p-4 rounded-2xl border text-left transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#eaf2ee] border-[#164e3d] text-[#164e3d]'
                              : 'bg-white border-[#e2ebe5] hover:border-[#164e3d]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-[#182620] text-sm">{occ.id}</span>
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                              isSelected ? 'bg-[#164e3d] text-white' : 'border border-[#e2ebe5]'
                            }`}>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                          <p className="text-xs text-[#55695f]">{occ.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Step 5: Choose Products */}
                {currentStep === 5 && (
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-[#164e3d] mb-1">
                      Tap spices to include in your personalized box:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {products.map(p => {
                        const isSelected = formData.selectedProducts.includes(p.id);
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => handleToggleMulti('selectedProducts', p.id)}
                            className={`p-3 rounded-2xl border flex items-center gap-3 transition-colors text-left cursor-pointer ${
                              isSelected
                                ? 'bg-[#eaf2ee] border-[#164e3d]'
                                : 'bg-white border-[#e2ebe5] hover:border-[#164e3d]'
                            }`}
                          >
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-12 h-12 rounded-xl object-cover border border-[#e2ebe5] flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <span className="font-bold text-[#182620] text-xs block truncate">
                                {p.name}
                              </span>
                              <span className="font-gujarati text-[11px] text-[#c27803] block">
                                {p.gujaratiName} • {p.weight}
                              </span>
                            </div>
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${
                              isSelected ? 'bg-[#164e3d] text-white' : 'border border-[#e2ebe5]'
                            }`}>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {errors.selectedProducts && (
                      <p className="text-red-600 text-xs font-semibold mt-2">{errors.selectedProducts}</p>
                    )}
                  </div>
                )}

              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-[#e2ebe5] mt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    currentStep === 0
                      ? 'opacity-40 cursor-not-allowed text-[#55695f]'
                      : 'text-[#182620] hover:bg-[#f8faf8]'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 bg-[#164e3d] hover:bg-[#113e30] text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer shadow-xs active:scale-95"
                >
                  <span>{currentStep === steps.length - 1 ? 'View Summary & Order' : 'Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ) : (
            /* Submission Success State - Direct Buy Now */
            <div className="text-center py-6 animate-fade-in space-y-6">
              
              <div className="w-16 h-16 rounded-3xl bg-[#eaf2ee] text-[#164e3d] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#164e3d] font-1 mt-2">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-[#55695f] text-xs sm:text-sm mt-1 max-w-md mx-auto">
                  Your customized Bhagvat Prasadam Pure Spice Box is ready. Order directly via WhatsApp for swift confirmation and dispatch!
                </p>
              </div>

              {/* Box Summary */}
              <div className="max-w-md mx-auto bg-[#f8faf8] rounded-2xl p-4 border border-[#e2ebe5] text-left space-y-2">
                <p className="text-xs font-bold text-[#164e3d] border-b border-[#e2ebe5] pb-1.5">
                  Selected Spices ({selectedItemsDetails.length} items):
                </p>
                {selectedItemsDetails.map(item => (
                  <div key={item.id} className="flex items-center justify-between text-xs text-[#182620] py-1.5 border-b border-[#e2ebe5] last:border-b-0">
                    <div>
                      <span className="font-bold text-[#182620] block">{item.name}</span>
                      <span className="text-[10px] text-[#55695f]">{item.weight}</span>
                    </div>
                    <a
                      href={item.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#164e3d] bg-[#eaf2ee] hover:bg-[#164e3d] hover:text-white px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                    >
                      <span>Buy Now</span>
                      <span>↗</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Single Prominent WhatsApp Order Button */}
              <div className="max-w-md mx-auto pt-2">
                <a
                  href={`https://wa.me/918850011652?text=${getWhatsAppOrderText()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#164e3d] hover:bg-[#113e30] text-white font-bold py-4 px-6 rounded-xl text-base transition-colors shadow-md active:scale-95 cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Order Custom Box on WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(0);
                }}
                className="text-xs text-[#164e3d] hover:underline font-semibold cursor-pointer block mx-auto"
              >
                ← Edit Preferences or Reconfigure Box
              </button>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
