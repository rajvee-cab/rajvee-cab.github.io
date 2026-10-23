import re
import glob

city_pages = [
    {
        'file': 'src/app/cab-service-rajkot/page.jsx',
        'city': 'Rajkot',
        'url': 'https://rajvee-cab.github.io/cab-service-rajkot/',
        'landmark': 'Greenland Chokdi & Hirasar Airport'
    },
    {
        'file': 'src/app/cab-service-ahmedabad/page.jsx',
        'city': 'Ahmedabad',
        'url': 'https://rajvee-cab.github.io/cab-service-ahmedabad/',
        'landmark': 'SVPI Airport & Kalupur Railway Station'
    },
    {
        'file': 'src/app/cab-service-surat/page.jsx',
        'city': 'Surat',
        'url': 'https://rajvee-cab.github.io/cab-service-surat/',
        'landmark': 'Surat Diamond Bourse & Railway Station'
    },
    {
        'file': 'src/app/cab-service-vadodara/page.jsx',
        'city': 'Vadodara',
        'url': 'https://rajvee-cab.github.io/cab-service-vadodara/',
        'landmark': 'Alkapuri & Vadodara Junction'
    },
    {
        'file': 'src/app/cab-service-gandhinagar/page.jsx',
        'city': 'Gandhinagar',
        'url': 'https://rajvee-cab.github.io/cab-service-gandhinagar/',
        'landmark': 'GIFT City & Infocity'
    },
    {
        'file': 'src/app/cab-service-jamnagar/page.jsx',
        'city': 'Jamnagar',
        'url': 'https://rajvee-cab.github.io/cab-service-jamnagar/',
        'landmark': 'Reliance Greens & Jamnagar Airport'
    },
    {
        'file': 'src/app/cab-service-bhavnagar/page.jsx',
        'city': 'Bhavnagar',
        'url': 'https://rajvee-cab.github.io/cab-service-bhavnagar/',
        'landmark': 'Bhavnagar Terminal & Alang Highway'
    },
    {
        'file': 'src/app/cab-service-junagadh/page.jsx',
        'city': 'Junagadh',
        'url': 'https://rajvee-cab.github.io/cab-service-junagadh/',
        'landmark': 'Girnar Ropeway & Uparkot'
    },
    {
        'file': 'src/app/cab-service-morbi/page.jsx',
        'city': 'Morbi',
        'url': 'https://rajvee-cab.github.io/cab-service-morbi/',
        'landmark': 'Ceramic Zone & NH 27 Bypass'
    },
    {
        'file': 'src/app/cab-service-somnath/page.jsx',
        'city': 'Somnath',
        'url': 'https://rajvee-cab.github.io/cab-service-somnath/',
        'landmark': 'Somnath Jyotirlinga Temple & Veraval'
    },
    {
        'file': 'src/app/cab-service-dwarka/page.jsx',
        'city': 'Dwarka',
        'url': 'https://rajvee-cab.github.io/cab-service-dwarka/',
        'landmark': 'Dwarkadhish Temple & Bet Dwarka'
    },
    {
        'file': 'src/app/cab-service-bhuj/page.jsx',
        'city': 'Bhuj',
        'url': 'https://rajvee-cab.github.io/cab-service-bhuj/',
        'landmark': 'Kutch Rann Utsav & Bhuj Airport'
    }
]

for c in city_pages:
    with open(c['file'], 'r', encoding='utf-8') as f:
        code = f.read()

    city = c['city']
    url = c['url']
    landmark = c['landmark']

    schemas_to_add = f"""
  const breadcrumbSchema = {{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rajvee-cab.github.io/' }},
      {{ '@type': 'ListItem', position: 2, name: 'Gujarat Cities', item: 'https://rajvee-cab.github.io/#coverage' }},
      {{ '@type': 'ListItem', position: 3, name: 'Cab Service in {city}', item: '{url}' }}
    ]
  }};

  const faqSchema = {{
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {{
        '@type': 'Question',
        name: 'How do I book a cab in {city} with Rajvee Cab?',
        acceptedAnswer: {{
          '@type': 'Answer',
          text: 'Booking a cab in {city} is instantaneous. Simply call our 24x7 desk at +91 97378 72972 or message on WhatsApp. Share your pickup address, travel date, and destination for immediate chauffeur and vehicle details.'
        }}
      }},
      {{
        '@type': 'Question',
        name: 'Are one-way outstation cabs available from {city} without return fare?',
        acceptedAnswer: {{
          '@type': 'Answer',
          text: 'Yes! With Rajvee Cab One-Way drop service, you pay only for the one-sided journey from {city}. There are zero return kilometer charges across all destinations in Gujarat.'
        }}
      }},
      {{
        '@type': 'Question',
        name: 'What types of cars are available for hire in {city}?',
        acceptedAnswer: {{
          '@type': 'Answer',
          text: 'Our commercial fleet in {city} includes: Swift Dzire and Hyundai Aura (Sedan 4+1 @ ₹11-12/KM), Maruti Ertiga (SUV 6+1 @ ₹14-15/KM), and Toyota Innova Crysta (Luxury 7+1 @ ₹18-20/KM) with verified chauffeurs.'
        }}
      }},
      {{
        '@type': 'Question',
        name: 'Do you provide airport and railway station pickup in {city}?',
        acceptedAnswer: {{
          '@type': 'Answer',
          text: 'Yes, we provide 24 hours guaranteed doorstep pickup from {landmark} and all major residential and corporate zones with live flight tracking.'
        }}
      }}
    ]
  }};
"""

    if 'breadcrumbSchema' not in code:
        code = code.replace('  return (', schemas_to_add + '\n  return (')
        
        # Inject scripts
        script_injection = """      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
"""
        # Find the first schema script tag
        code = re.sub(
            r'(dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\([^)]+\)\s*\}\}\s*\n\s*/>)',
            r'\1\n' + script_injection,
            code,
            count=1
        )

    with open(c['file'], 'w', encoding='utf-8') as f:
        f.write(code)

    print(f"Updated: {c['file']}")

print("All 12 city pages updated successfully!")
