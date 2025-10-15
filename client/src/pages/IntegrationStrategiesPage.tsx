import React, { useState } from 'react';
import { CheckCircle2, Circle, ChevronDown, ChevronRight, ExternalLink, Calendar, Mail, ShoppingCart, MessageSquare, FileText, CreditCard, Users, MapPin } from 'lucide-react';

export default function IntegrationStrategiesPage() {
  const [expandedCategory, setExpandedCategory] = useState('essential');
  const [selectedIntegrations, setSelectedIntegrations] = useState([]);

  const integrationCategories = [
    {
      id: 'essential',
      name: 'Essential Integrations',
      description: 'Core functionality to get started immediately',
      integrations: [
        {
          name: 'Contact Form System',
          icon: Mail,
          priority: 'High',
          timeframe: '1-2 days',
          description: 'Collect customer inquiries directly through your website',
          technologies: ['React Hook Form', 'Zod validation', 'Email service'],
          steps: [
            'Add contact form component to Contact section',
            'Set up form validation with Zod',
            'Integrate email service (SendGrid/Mailgun)',
            'Add success/error notifications'
          ]
        },
        {
          name: 'Quote Request System',
          icon: FileText,
          priority: 'High',
          timeframe: '2-3 days',
          description: 'Allow customers to request service quotes online',
          technologies: ['React Hook Form', 'Database storage', 'Admin dashboard'],
          steps: [
            'Create quote request form with service selection',
            'Store quotes in PostgreSQL database',
            'Email notifications to team',
            'Admin view to manage quotes'
          ]
        },
        {
          name: 'Google Maps Integration',
          icon: MapPin,
          priority: 'Medium',
          timeframe: '1 day',
          description: 'Show your physical location to customers',
          technologies: ['Google Maps API', 'React integration'],
          steps: [
            'Get Google Maps API key',
            'Add map component to Contact section',
            'Mark business location',
            'Add custom styling to match brand'
          ]
        }
      ]
    },
    {
      id: 'booking',
      name: 'Booking & Scheduling',
      description: 'Let customers book services online',
      integrations: [
        {
          name: 'Online Booking Calendar',
          icon: Calendar,
          priority: 'High',
          timeframe: '3-5 days',
          description: 'Enable customers to schedule consultations/services',
          technologies: ['React Day Picker', 'Database', 'Email notifications'],
          steps: [
            'Create booking calendar interface',
            'Set available time slots',
            'Integrate with team calendar',
            'Send confirmation emails',
            'Add reminder system'
          ]
        },
        {
          name: 'Calendar Integration',
          icon: Calendar,
          priority: 'Medium',
          timeframe: '2-3 days',
          description: 'Sync bookings with Google Calendar/Outlook',
          technologies: ['Google Calendar API', 'Microsoft Graph API'],
          steps: [
            'Authenticate with calendar service',
            'Create two-way sync',
            'Handle conflict detection',
            'Add calendar invites for customers'
          ]
        }
      ]
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Features',
      description: 'Sell products and accept payments online',
      integrations: [
        {
          name: 'Product Catalog',
          icon: ShoppingCart,
          priority: 'Medium',
          timeframe: '3-4 days',
          description: 'Showcase nursery plants and products',
          technologies: ['Database', 'Image hosting', 'Search functionality'],
          steps: [
            'Design product database schema',
            'Create product listing pages',
            'Add categories and filters',
            'Implement search functionality',
            'Add product image gallery'
          ]
        },
        {
          name: 'Payment Processing',
          icon: CreditCard,
          priority: 'High',
          timeframe: '2-3 days',
          description: 'Accept online payments for services/products',
          technologies: ['Stripe/PayPal', 'Secure checkout', 'Webhooks'],
          steps: [
            'Set up Stripe/PayPal account',
            'Integrate payment API',
            'Create secure checkout flow',
            'Add payment confirmation system',
            'Set up webhook handlers'
          ]
        },
        {
          name: 'Shopping Cart System',
          icon: ShoppingCart,
          priority: 'Medium',
          timeframe: '2-3 days',
          description: 'Let customers add multiple items before checkout',
          technologies: ['React Context', 'Local storage', 'Checkout flow'],
          steps: [
            'Create cart context/state management',
            'Add to cart functionality',
            'Cart summary and editing',
            'Integrate with checkout',
            'Add quantity management'
          ]
        }
      ]
    },
    {
      id: 'communication',
      name: 'Customer Communication',
      description: 'Engage and support your customers',
      integrations: [
        {
          name: 'Live Chat Widget',
          icon: MessageSquare,
          priority: 'Medium',
          timeframe: '1-2 days',
          description: 'Provide instant customer support',
          technologies: ['Intercom/Crisp/Tawk.to', 'Widget integration'],
          steps: [
            'Choose chat service provider',
            'Add widget to website',
            'Configure chat settings',
            'Set up team access',
            'Add automated responses'
          ]
        },
        {
          name: 'WhatsApp Business Integration',
          icon: MessageSquare,
          priority: 'High',
          timeframe: '1 day',
          description: 'Connect with customers via WhatsApp',
          technologies: ['WhatsApp Business API', 'Click-to-chat'],
          steps: [
            'Set up WhatsApp Business account',
            'Add click-to-chat button',
            'Create pre-filled message templates',
            'Add to contact section'
          ]
        },
        {
          name: 'Email Newsletter System',
          icon: Mail,
          priority: 'Medium',
          timeframe: '2-3 days',
          description: 'Build and engage your customer base',
          technologies: ['Mailchimp/SendGrid', 'Subscription forms'],
          steps: [
            'Choose email marketing platform',
            'Create signup forms',
            'Design email templates',
            'Set up automated campaigns',
            'Add GDPR compliance'
          ]
        }
      ]
    },
    {
      id: 'social',
      name: 'Social Media Integration',
      description: 'Connect with customers on social platforms',
      integrations: [
        {
          name: 'Instagram Feed Display',
          icon: Users,
          priority: 'Low',
          timeframe: '1-2 days',
          description: 'Showcase your work from Instagram',
          technologies: ['Instagram API', 'Image gallery'],
          steps: [
            'Connect Instagram Business account',
            'Fetch recent posts via API',
            'Create gallery component',
            'Add auto-refresh',
            'Link to Instagram profile'
          ]
        },
        {
          name: 'Social Media Sharing',
          icon: Users,
          priority: 'Low',
          timeframe: '1 day',
          description: 'Let visitors share your content',
          technologies: ['Social media APIs', 'Share buttons'],
          steps: [
            'Add share button components',
            'Configure Open Graph meta tags',
            'Add Twitter cards',
            'Test sharing functionality'
          ]
        }
      ]
    }
  ];

  const toggleIntegration = (integrationName) => {
    setSelectedIntegrations(prev => 
      prev.includes(integrationName) 
        ? prev.filter(i => i !== integrationName)
        : [...prev, integrationName]
    );
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'text-red-600 bg-red-50 border-red-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">M</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Moofar Integration Strategies</h1>
              <p className="text-gray-600">Strategic roadmap for enhancing your website</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{integrationCategories.reduce((sum, cat) => sum + cat.integrations.length, 0)}</div>
              <div className="text-sm text-gray-600">Total Integrations</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
              <div className="text-2xl font-bold text-green-600">{selectedIntegrations.length}</div>
              <div className="text-sm text-gray-600">Selected for Implementation</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
              <div className="text-2xl font-bold text-purple-600">
                {integrationCategories.reduce((sum, cat) => 
                  sum + cat.integrations.filter(i => i.priority === 'High').length, 0
                )}
              </div>
              <div className="text-sm text-gray-600">High Priority Items</div>
            </div>
          </div>
        </div>

        {/* Integration Categories */}
        <div className="space-y-6">
          {integrationCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {expandedCategory === category.id ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                  <div className="text-left">
                    <h2 className="text-xl font-bold text-gray-900">{category.name}</h2>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  {category.integrations.length} items
                </div>
              </button>

              {expandedCategory === category.id && (
                <div className="p-6 pt-0 space-y-4">
                  {category.integrations.map((integration, idx) => {
                    const Icon = integration.icon;
                    const isSelected = selectedIntegrations.includes(integration.name);
                    
                    return (
                      <div key={idx} className="border-2 border-gray-200 rounded-lg p-6 hover:border-green-300 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4 flex-1">
                            <button
                              onClick={() => toggleIntegration(integration.name)}
                              className="mt-1"
                            >
                              {isSelected ? (
                                <CheckCircle2 className="w-6 h-6 text-green-600" />
                              ) : (
                                <Circle className="w-6 h-6 text-gray-300" />
                              )}
                            </button>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Icon className="w-6 h-6 text-green-600" />
                                <h3 className="text-lg font-bold text-gray-900">{integration.name}</h3>
                              </div>
                              <p className="text-gray-600 mb-3">{integration.description}</p>
                              
                              <div className="flex flex-wrap gap-2 mb-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium border-2 ${getPriorityColor(integration.priority)}`}>
                                  {integration.priority} Priority
                                </span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border-2 border-blue-200">
                                  ⏱️ {integration.timeframe}
                                </span>
                              </div>

                              <div className="mb-3">
                                <div className="text-sm font-medium text-gray-700 mb-2">Technologies:</div>
                                <div className="flex flex-wrap gap-2">
                                  {integration.technologies.map((tech, i) => (
                                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <div className="text-sm font-medium text-gray-700 mb-2">Implementation Steps:</div>
                                <ol className="space-y-1">
                                  {integration.steps.map((step, i) => (
                                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                      <span className="text-green-600 font-medium">{i + 1}.</span>
                                      <span>{step}</span>
                                    </li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Recommended Action Plan */}
        {selectedIntegrations.length > 0 && (
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg shadow-lg p-8 mt-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Your Selected Integration Plan</h2>
            <p className="mb-4">You've selected {selectedIntegrations.length} integration(s) to implement:</p>
            <ul className="space-y-2 mb-6">
              {selectedIntegrations.map((name, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{nam
  );
}
