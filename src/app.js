// Fan Engagement Idea Generator - Core Application Logic

// Data structure for engagement ideas
const ideasDatabase = [
  {
    "id": "idea-001",
    "title": "Augmented Reality Stadium Scavenger Hunt",
    "category": "digital",
    "description": "A mobile app-based scavenger hunt using AR technology throughout the venue",
    "implementation": "Develop a simple AR app or integrate into existing team app",
    "budgetLevel": "medium",
    "complexity": "medium",
    "audienceTypes": ["families", "tech-savvy", "casual-fans"],
    "relevantProductTypes": ["sports-team", "entertainment-venue"],
    "tags": ["Innovation", "Technology", "Entertainment", "Family-friendly"],
    "potentialMetrics": ["app downloads", "hunt completion rate", "average time spent"],
    "estimatedCost": "$5,000-$15,000",
    "timeToImplement": "1-3 months"
  },
  {
    "id": "idea-002",
    "title": "Virtual Fan Meetups",
    "category": "digital",
    "description": "Scheduled online video sessions where fans can interact with players, coaches, or staff",
    "implementation": "Use existing video conferencing platforms with a registration system",
    "budgetLevel": "low",
    "complexity": "low",
    "audienceTypes": ["hardcore-fans", "casual-fans", "young-adults"],
    "relevantProductTypes": ["sports-team", "media-platform", "brand"],
    "tags": ["Community", "Accessibility", "Entertainment"],
    "potentialMetrics": ["registration numbers", "attendance rate", "social media shares"],
    "estimatedCost": "$500-$2,000",
    "timeToImplement": "2-4 weeks"
  },
  {
    "id": "idea-003",
    "title": "Community Service Day",
    "category": "in-person",
    "description": "Organize events where fans can volunteer alongside team members for community projects",
    "implementation": "Partner with local nonprofits and promote through team channels",
    "budgetLevel": "medium",
    "complexity": "medium",
    "audienceTypes": ["families", "hardcore-fans"],
    "relevantProductTypes": ["sports-team", "brand"],
    "tags": ["Community", "Sustainability", "Teamwork"],
    "potentialMetrics": ["volunteer participation", "media coverage", "social sentiment"],
    "estimatedCost": "$3,000-$10,000",
    "timeToImplement": "1-2 months"
  },
  {
    "id": "idea-004",
    "title": "Fan Content Creation Contest",
    "category": "hybrid",
    "description": "Competition for fans to create content (videos, art, etc.) related to the team or brand",
    "implementation": "Set up submission portal and judging system, offer prizes",
    "budgetLevel": "low",
    "complexity": "low",
    "audienceTypes": ["young-adults", "tech-savvy", "hardcore-fans"],
    "relevantProductTypes": ["sports-team", "media-platform", "brand"],
    "tags": ["Creativity", "Community", "Entertainment"],
    "potentialMetrics": ["submission count", "social engagement", "website traffic"],
    "estimatedCost": "$1,000-$5,000",
    "timeToImplement": "2-4 weeks"
  },
  {
    "id": "idea-005",
    "title": "Behind-the-Scenes Experiences",
    "category": "in-person",
    "description": "Exclusive tours and experiences showing the inner workings of the team/venue",
    "implementation": "Create ticketed or reward-based access to practices, locker rooms, etc.",
    "budgetLevel": "medium",
    "complexity": "medium",
    "audienceTypes": ["hardcore-fans", "families"],
    "relevantProductTypes": ["sports-team", "entertainment-venue"],
    "tags": ["Exclusivity", "Community", "Entertainment"],
    "potentialMetrics": ["ticket sales", "participant feedback", "membership conversions"],
    "estimatedCost": "$2,000-$8,000",
    "timeToImplement": "1-2 months"
  },
  {
    "id": "idea-006",
    "title": "Interactive Live Stream Commentary",
    "category": "digital",
    "description": "Allow fans to contribute questions and comments during live event broadcasts",
    "implementation": "Integrate with existing streaming platform or social media",
    "budgetLevel": "low",
    "complexity": "low",
    "audienceTypes": ["tech-savvy", "young-adults", "casual-fans"],
    "relevantProductTypes": ["sports-team", "media-platform"],
    "tags": ["Innovation", "Community", "Entertainment", "Technology"],
    "potentialMetrics": ["comment volume", "viewer retention", "social sharing"],
    "estimatedCost": "$500-$3,000",
    "timeToImplement": "2-6 weeks"
  },
  {
    "id": "idea-007",
    "title": "Personalized Milestone Celebrations",
    "category": "hybrid",
    "description": "Recognize individual fan milestones (birthdays, attendance anniversaries) with personalized content",
    "implementation": "Create a CRM system to track fan data and automate recognition",
    "budgetLevel": "medium",
    "complexity": "high",
    "audienceTypes": ["hardcore-fans", "families"],
    "relevantProductTypes": ["sports-team", "entertainment-venue", "brand"],
    "tags": ["Community", "Loyalty", "Personalization"],
    "potentialMetrics": ["retention rates", "social sharing", "loyalty program signups"],
    "estimatedCost": "$8,000-$20,000",
    "timeToImplement": "2-4 months"
  },
  {
    "id": "idea-008",
    "title": "Pop-up Fan Zones",
    "category": "in-person",
    "description": "Create temporary fan engagement spaces in unexpected locations",
    "implementation": "Deploy mobile activation units in high-traffic areas",
    "budgetLevel": "high",
    "complexity": "high",
    "audienceTypes": ["casual-fans", "families", "young-adults"],
    "relevantProductTypes": ["sports-team", "brand"],
    "tags": ["Innovation", "Community", "Entertainment"],
    "potentialMetrics": ["foot traffic", "social media impressions", "new fan acquisition"],
    "estimatedCost": "$15,000-$50,000",
    "timeToImplement": "2-3 months"
  },
  {
    "id": "idea-009",
    "title": "Fantasy Team Integration",
    "category": "digital",
    "description": "Create a unique fantasy sports experience that connects to real team benefits",
    "implementation": "Develop or partner with fantasy platform and integrate rewards program",
    "budgetLevel": "high",
    "complexity": "high",
    "audienceTypes": ["hardcore-fans", "tech-savvy", "young-adults"],
    "relevantProductTypes": ["sports-team", "media-platform"],
    "tags": ["Competition", "Technology", "Entertainment"],
    "potentialMetrics": ["user adoption", "time spent", "cross-promotion conversion"],
    "estimatedCost": "$20,000-$100,000",
    "timeToImplement": "3-6 months"
  },
  {
    "id": "idea-010",
    "title": "Fan Advisory Board",
    "category": "hybrid",
    "description": "Create a formal program where selected fans provide feedback and ideas",
    "implementation": "Application process, regular meetings, and implementation tracking",
    "budgetLevel": "low",
    "complexity": "medium",
    "audienceTypes": ["hardcore-fans"],
    "relevantProductTypes": ["sports-team", "entertainment-venue", "brand"],
    "tags": ["Community", "Inclusivity", "Innovation"],
    "potentialMetrics": ["implementation rate", "participant satisfaction", "idea quality"],
    "estimatedCost": "$1,000-$5,000",
    "timeToImplement": "1-2 months"
  }
];

// Core matching algorithm
function matchIdeasToUserInput(userInput, ideasDatabase) {
  // Extract user parameters
  const { productType, targetAudience, budgetRange, brandValues } = userInput;
  
  // Score each idea based on relevance to user input
  const scoredIdeas = ideasDatabase.map(idea => {
    let score = 0;
    
    // Budget match (highest priority)
    if (idea.budgetLevel === budgetRange) {
      score += 30;
    } else if (getBudgetCompatibility(idea.budgetLevel, budgetRange)) {
      score += 15;
    }
    
    // Audience match
    const audienceMatchScore = getAudienceMatchScore(idea.audienceTypes, targetAudience);
    score += audienceMatchScore * 25;
    
    // Brand values alignment
    const valueAlignmentScore = getBrandValueAlignment(idea.tags, brandValues);
    score += valueAlignmentScore * 20;
    
    // Product type relevance
    if (idea.relevantProductTypes.includes(productType)) {
      score += 25;
    }
    
    return {
      ...idea,
      relevanceScore: score
    };
  });
  
  // Sort by score (descending) and return top results
  return scoredIdeas
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 10); // Return top 10 ideas
}

// Helper functions for scoring logic
function getBudgetCompatibility(ideaBudget, userBudget) {
  const budgetLevels = ['low', 'medium', 'high'];
  const ideaLevel = budgetLevels.indexOf(ideaBudget);
  const userLevel = budgetLevels.indexOf(userBudget);
  
  // Return true if idea budget is lower than or equal to user budget
  return ideaLevel <= userLevel;
}

function getAudienceMatchScore(ideaAudiences, userAudience) {
  // Calculate percentage of overlap between audiences
  const overlap = ideaAudiences.filter(audience => userAudience.includes(audience));
  return overlap.length / ideaAudiences.length;
}

function getBrandValueAlignment(ideaTags, brandValues) {
  // Calculate how many brand values align with idea tags
  const alignedValues = brandValues.filter(value => 
    ideaTags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))
  );
  return alignedValues.length / brandValues.length;
}

// Vue.js Application setup
document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el: '#fan-engagement-app',
    data: {
      currentStep: 1,
      userInput: {
        productType: '',
        sportType: '',
        budgetRange: 'medium',
        targetAudience: [],
        primaryChallenge: '',
        brandValues: []
      },
      availableBrandValues: [
        'Innovation', 'Tradition', 'Community', 'Excellence', 
        'Inclusivity', 'Competition', 'Entertainment', 'Education',
        'Sustainability', 'Creativity', 'Technology', 'Family-friendly',
        'Excitement', 'Luxury', 'Accessibility', 'Teamwork'
      ],
      generatedIdeas: [],
      filters: {
        category: ''
      },
      isLoading: false
    },
    computed: {
      filteredIdeas() {
        if (!this.filters.category) {
          return this.generatedIdeas;
        }
        
        return this.generatedIdeas.filter(idea => 
          idea.category === this.filters.category
        );
      }
    },
    methods: {
      goToNextStep() {
        this.currentStep++;
      },
      goToPreviousStep() {
        this.currentStep--;
      },
      generateIdeas() {
        this.isLoading = true;
        
        // Simulate API call with timeout
        setTimeout(() => {
          this.generatedIdeas = matchIdeasToUserInput(this.userInput, ideasDatabase);
          this.currentStep = 4;
          this.isLoading = false;
        }, 1500);
      },
      startOver() {
        this.currentStep = 1;
        this.userInput = {
          productType: '',
          sportType: '',
          budgetRange: 'medium',
          targetAudience: [],
          primaryChallenge: '',
          brandValues: []
        };
        this.generatedIdeas = [];
        this.filters.category = '';
      }
    }
  });
});