'use client';
import React, { useState } from 'react';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Subscription plans based on cahier des charges
  const subscriptionPlans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 2.99,
      period: 'mois',
      features: [
        'Jusqu\'à 3 produits',
        'Accès aux 4 mots-clés tendance',
        'Notifications WhatsApp par commande',
        'Statistiques de base (vues & commandes)',
        'Gestion des abonnés',
        'Système ShopCoin de base'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'Standard',
      price: 4.99,
      period: 'mois',
      features: [
        'Jusqu\'à 10 produits',
        'Accès aux 7 mots-clés tendance',
        'Résumé journalier WhatsApp',
        'Statistiques avancées',
        'Gestion des abonnés + notifications',
        'Points ShopCoin cumulés'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 9.99,
      period: 'mois',
      features: [
        'Produits illimités',
        'Mots-clés tendance illimités',
        'Alertes personnalisées WhatsApp',
        'Statistiques ultra-avancées',
        'Campagnes promos ciblées',
        'Points + promos personnalisées'
      ],
      popular: false
    }
  ];

  // Duqah brand colors from charte graphique
  const colors = {
    primary: '#1b7045', // Green - confidence, growth, ethics
    primaryLight: '#558455',
    secondary: '#353535', // Dark gray - clarity, professionalism
    accent: '#ffb000', // Orange - calls to action, promotions
    accentSecondary: '#fc5d02',
    white: '#ffffff',
    lightGray: '#f8f9fa'
  };

  const Header = () => (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold" style={{ color: colors.primary }}>
                <span className="font-montserrat">Duqah</span>
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button 
                onClick={() => setCurrentView('home')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors font-montserrat"
                style={{ color: colors.secondary }}
              >
                Accueil
              </button>
              <button 
                onClick={() => setCurrentView('how-it-works')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors font-montserrat"
                style={{ color: colors.secondary }}
              >
                Comment ça marche
              </button>
              <button 
                onClick={() => setCurrentView('pricing')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors font-montserrat"
                style={{ color: colors.secondary }}
              >
                Tarifs
              </button>
              <button 
                onClick={() => setCurrentView('about')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors font-montserrat"
                style={{ color: colors.secondary }}
              >
                À propos
              </button>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {
                setCurrentView('pricing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors border-2 border-gray-900 font-montserrat"
              style={{ 
                color: colors.secondary,
                borderColor: colors.secondary
              }}
            >
              Devenir Vendeur
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  const HeroSection = () => (
    <div className="relative" style={{ backgroundColor: colors.lightGray }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat" style={{ color: colors.secondary }}>
            La plateforme <span style={{ color: colors.primary }}>Duqah</span> pour <span style={{ color: colors.accent }}>votre commerce</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-montserrat" style={{ color: colors.secondary }}>
            Duqah ne vend rien. Nous mettons à votre disposition une plateforme puissante pour développer votre commerce en ligne, sécurisée et accessible à tous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                setCurrentView('pricing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity font-montserrat"
              style={{ 
                backgroundColor: colors.accentSecondary,
                color: colors.white
              }}
            >
              Devenir Vendeur
            </button>
            <button 
              onClick={() => setCurrentView('how-it-works')}
              className="px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity border-2 font-montserrat"
              style={{ 
                backgroundColor: 'transparent',
                color: colors.primary,
                borderColor: colors.primary
              }}
            >
              Comment ça marche
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16" style={{ 
        background: `linear-gradient(to top, white, ${colors.lightGray})`
      }}></div>
    </div>
  );

  const FeaturesSection = () => (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-montserrat" style={{ color: colors.secondary }}>
            Pourquoi choisir Duqah?
          </h2>
          <p className="text-xl font-montserrat" style={{ color: colors.secondary }}>
            Une plateforme conçue pour décentraliser et humaniser le commerce digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🔓",
              title: "Plateforme Ouverte",
              description: "Accès à tous les vendeurs, indépendamment de leur taille. Pas de commission sur les ventes, seulement un abonnement transparent."
            },
            {
              icon: "📱",
              title: "Validation par QR Code",
              description: "Système sécurisé de validation des livraisons par QR code pour garantir la confiance entre acheteurs et vendeurs."
            },
            {
              icon: "⭐",
              title: "Système de Réputation",
              description: "Évaluations croisées et badges de confiance pour construire une communauté d'achat éthique et transparente."
            }
          ].map((feature, index) => (
            <div key={index} className="p-8 rounded-xl hover:shadow-lg transition-shadow" style={{ backgroundColor: colors.lightGray }}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 font-montserrat" style={{ color: colors.secondary }}>
                {feature.title}
              </h3>
              <p className="font-montserrat" style={{ color: colors.secondary }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const HowItWorksSection = () => (
    <div className="py-16" style={{ backgroundColor: colors.lightGray }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-montserrat" style={{ color: colors.secondary }}>
            Comment fonctionne Duqah?
          </h2>
          <p className="text-xl font-montserrat" style={{ color: colors.secondary }}>
            Un processus simple et sécurisé pour tous les utilisateurs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: colors.primaryLight }}>
              <span className="text-3xl font-bold text-white font-montserrat">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4 font-montserrat" style={{ color: colors.secondary }}>
              Création de compte vendeur
            </h3>
            <p className="mb-4 font-montserrat" style={{ color: colors.secondary }}>
              Choisissez votre formule d&apos;abonnement (Basic, Standard ou Premium) et créez votre boutique en quelques minutes.
            </p>
            <ul className="space-y-2 font-montserrat" style={{ color: colors.secondary }}>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Formulaire simple
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Validation rapide
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Sous-domaine personnalisé
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: colors.primaryLight }}>
              <span className="text-3xl font-bold text-white font-montserrat">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4 font-montserrat" style={{ color: colors.secondary }}>
              Gestion de la boutique
            </h3>
            <p className="mb-4 font-montserrat" style={{ color: colors.secondary }}>
              Ajoutez vos produits, gérez votre stock, communiquez avec vos clients et suivez vos performances en temps réel.
            </p>
            <ul className="space-y-2 font-montserrat" style={{ color: colors.secondary }}>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Interface intuitive
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Notifications WhatsApp
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Tableau de bord analytique
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: colors.primaryLight }}>
              <span className="text-3xl font-bold text-white font-montserrat">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4 font-montserrat" style={{ color: colors.secondary }}>
              Validation des commandes
            </h3>
            <p className="mb-4 font-montserrat" style={{ color: colors.secondary }}>
              Les clients reçoivent un QR code par WhatsApp. Scannez-le pour confirmer la livraison et finaliser la transaction.
            </p>
            <ul className="space-y-2 font-montserrat" style={{ color: colors.secondary }}>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                QR code unique par commande
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Confirmation sécurisée
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Mise à jour automatique
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const PricingSection = () => (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-montserrat" style={{ color: colors.secondary }}>
            Choisissez votre formule
          </h2>
          <p className="text-xl font-montserrat" style={{ color: colors.secondary }}>
            Des abonnements adaptés à la taille et aux besoins de votre commerce
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                plan.popular ? 'border-2 transform scale-105' : 'border border-gray-200'
              }`}
              style={{ 
                borderColor: plan.popular ? colors.primary : 'transparent'
              }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 px-4 py-1 text-sm font-bold rounded-bl-lg font-montserrat"
                  style={{ 
                    backgroundColor: colors.primary,
                    color: colors.white
                  }}
                >
                  POPULAIRE
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 font-montserrat" style={{ color: colors.secondary }}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold font-montserrat" style={{ color: colors.primary }}>
                    ${plan.price}
                  </span>
                  <span className="font-montserrat" style={{ color: colors.secondary }}>
                    /{plan.period}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8 font-montserrat">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start" style={{ color: colors.secondary }}>
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => {
                    setSelectedPlan(plan);
                    setShowSubscriptionModal(true);
                  }}
                  className="w-full py-3 px-4 rounded-lg font-bold transition-opacity hover:opacity-90 font-montserrat"
                  style={{
                    backgroundColor: plan.popular ? colors.accentSecondary : colors.primary,
                    color: colors.white
                  }}
                >
                  Choisir ce plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutSection = () => (
    <div className="py-16" style={{ backgroundColor: colors.lightGray }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-montserrat" style={{ color: colors.secondary }}>
            À propos de Duqah
          </h2>
          <p className="text-xl font-montserrat" style={{ color: colors.secondary }}>
            Une plateforme décentralisée pour humaniser le commerce digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-montserrat" style={{ color: colors.secondary }}>
              Notre Mission
            </h3>
            <p className="mb-6 font-montserrat" style={{ color: colors.secondary }}>
              Duqah est une plateforme de commerce électronique décentralisée qui ne vend rien elle-même. 
              Nous mettons en relation les petits commerçants, artisans et créateurs indépendants avec des consommateurs 
              engagés à la recherche d&apos;une alternative éthique et fiable au commerce en ligne traditionnel.
            </p>
            <p className="mb-8 font-montserrat" style={{ color: colors.secondary }}>
              Contrairement aux marketplaces traditionnelles, nous ne prenons pas de commission sur vos ventes. 
              Notre modèle repose uniquement sur des abonnements transparents, vous permettant de garder 100% de vos revenus.
            </p>
            
            <div className="p-6 rounded-lg" style={{ backgroundColor: colors.primaryLight }}>
              <h4 className="text-xl font-bold mb-3 font-montserrat" style={{ color: colors.white }}>
                Nos Valeurs Fondamentales
              </h4>
              <div className="space-y-3 font-montserrat">
                <div className="flex items-center" style={{ color: colors.white }}>
                  <span className="mr-3">✓</span>
                  <span className="font-bold">Décentralisation</span> - Donner le pouvoir aux vendeurs
                </div>
                <div className="flex items-center" style={{ color: colors.white }}>
                  <span className="mr-3">✓</span>
                  <span className="font-bold">Transparence</span> - Pas de commissions cachées
                </div>
                <div className="flex items-center" style={{ color: colors.white }}>
                  <span className="mr-3">✓</span>
                  <span className="font-bold">Sécurité</span> - Validation par QR code pour toutes les transactions
                </div>
                <div className="flex items-center" style={{ color: colors.white }}>
                  <span className="mr-3">✓</span>
                  <span className="font-bold">Accessibilité</span> - Interface fluide même avec une connexion limitée
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 font-montserrat" style={{ color: colors.secondary }}>
              Pour les Vendeurs
            </h3>
            <div className="space-y-6 font-montserrat">
              <div>
                <h4 className="font-bold mb-3" style={{ color: colors.secondary }}>Création de Boutique</h4>
                <p style={{ color: colors.secondary }}>
                  Obtenez votre propre sous-domaine (votreboutique.duqah.com) et créez une vitrine professionnelle en quelques minutes.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-3" style={{ color: colors.secondary }}>Gestion des Produits</h4>
                <p style={{ color: colors.secondary }}>
                  Ajoutez, modifiez et gérez votre catalogue de produits avec des images haute qualité et des descriptions détaillées.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-3" style={{ color: colors.secondary }}>Système de Fidélité</h4>
                <p style={{ color: colors.secondary }}>
                  Utilisez notre système de ShopCoin pour récompenser vos clients fidèles et encourager les évaluations positives.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-3" style={{ color: colors.secondary }}>Analytique Avancée</h4>
                <p style={{ color: colors.secondary }}>
                  Accédez à des rapports détaillés sur vos ventes, vos clients et les tendances de recherche pour optimiser votre stratégie.
                </p>
              </div>
              
              <button 
                onClick={() => setCurrentView('pricing')}
                className="w-full py-3 rounded-lg font-bold hover:opacity-90 transition-opacity font-montserrat"
                style={{
                  backgroundColor: colors.accentSecondary,
                  color: colors.white
                }}
              >
                Découvrir nos formules
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SubscriptionModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold font-montserrat" style={{ color: colors.secondary }}>
            Abonnement {selectedPlan?.name}
          </h3>
          <button 
            onClick={() => setShowSubscriptionModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-6">
          <p className="mb-4 font-montserrat" style={{ color: colors.secondary }}>
            Vous avez sélectionné le plan <span className="font-bold">{selectedPlan?.name}</span> à <span className="font-bold" style={{ color: colors.primary }}>${selectedPlan?.price}/mois</span>.
          </p>
          <p className="mb-6 font-montserrat" style={{ color: colors.secondary }}>
            Remplissez le formulaire ci-dessous pour créer votre boutique sur Duqah.
          </p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 font-montserrat" style={{ color: colors.secondary }}>
                Nom de votre boutique *
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                style={{ 
                  borderColor: colors.primary,
                  color: colors.secondary
                }}
                placeholder="Ex: Artisanat du Maroc" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 font-montserrat" style={{ color: colors.secondary }}>
                Numéro de téléphone WhatsApp *
              </label>
              <input 
                type="tel" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                style={{ 
                  borderColor: colors.primary,
                  color: colors.secondary
                }}
                placeholder="+212 ..." 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 font-montserrat" style={{ color: colors.secondary }}>
                Email *
              </label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                style={{ 
                  borderColor: colors.primary,
                  color: colors.secondary
                }}
                placeholder="votre@email.com" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 font-montserrat" style={{ color: colors.secondary }}>
                Mot de passe *
              </label>
              <input 
                type="password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                style={{ 
                  borderColor: colors.primary,
                  color: colors.secondary
                }}
                placeholder="••••••••" 
              />
            </div>
            
            <div className="p-4 rounded-lg" style={{ backgroundColor: colors.lightGray }}>
              <h4 className="font-bold mb-2 font-montserrat" style={{ color: colors.secondary }}>
                Informations légales (optionnel pour l&apos;instant)
              </h4>
              <p className="text-sm font-montserrat" style={{ color: colors.secondary }}>
                Vous pourrez compléter ces informations dans votre tableau de bord après la création de votre compte.
              </p>
            </div>
          </form>
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={() => setShowSubscriptionModal(false)}
            className="flex-1 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors font-montserrat"
            style={{ 
              color: colors.secondary,
              borderColor: colors.secondary,
              border: '1px solid'
            }}
          >
            Annuler
          </button>
          <button 
            onClick={() => {
              setShowSubscriptionModal(false);
              alert('Félicitations ! Votre boutique a été créée avec succès. Vous allez recevoir un email de confirmation avec les instructions pour accéder à votre tableau de bord.');
            }}
            className="flex-1 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity font-montserrat"
            style={{
              backgroundColor: colors.primary,
              color: colors.white
            }}
          >
            Créer ma boutique
          </button>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-montserrat" style={{ color: colors.primary }}>
              Duqah
            </h3>
            <p className="mb-4 font-montserrat" style={{ color: colors.secondary }}>
              Une plateforme décentralisée pour humaniser le commerce digital. Duqah ne vend rien, nous vous donnons les outils pour vendre.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-montserrat" style={{ color: colors.secondary }}>
              Pour les Vendeurs
            </h4>
            <ul className="space-y-2 font-montserrat">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Devenir vendeur</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Guide du vendeur</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Tarifs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-montserrat" style={{ color: colors.secondary }}>
              Pour les Acheteurs
            </h4>
            <ul className="space-y-2 font-montserrat">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Comment acheter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Système de fidélité</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Sécurité</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-montserrat" style={{ color: colors.secondary }}>
              Contact
            </h4>
            <address className="not-italic font-montserrat" style={{ color: colors.secondary }}>
              <p>contact@duqah.com</p>
              <p>+243 997 526 688</p>
              <p className="mt-4">DUQAH RDC VENTE EN LIGNE GROS/DETAIL</p>
              <p>RCCM: CDGOM5568B-7AER-BBRT</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="font-montserrat" style={{ color: colors.secondary }}>
            &copy; 2025 Duqah. Tous droits réservés. Plateforme de commerce électronique décentralisée.
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Header />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <PricingSection />
          </>
        )}
        
        {currentView === 'how-it-works' && (
          <div className="py-8">
            <HowItWorksSection />
          </div>
        )}
        
        {currentView === 'pricing' && (
          <div className="py-8">
            <PricingSection />
          </div>
        )}
        
        {currentView === 'about' && (
          <div className="py-8">
            <AboutSection />
          </div>
        )}
      </main>
      
      <Footer />
      
      {showSubscriptionModal && selectedPlan && <SubscriptionModal />}
    </div>
  );
};

export default App;
