import re
import glob

static_routes = [
    {
        'file': 'src/app/rajkot-to-surat-cab/page.jsx',
        'origin': 'Rajkot',
        'destination': 'Surat',
        'price': '₹4,699',
        'distance': '~440 KM',
        'duration': '7.5 - 8 Hours',
        'url': 'https://rajvee-cab.github.io/rajkot-to-surat-cab/'
    },
    {
        'file': 'src/app/rajkot-to-vadodara-cab/page.jsx',
        'origin': 'Rajkot',
        'destination': 'Vadodara',
        'price': '₹3,499',
        'distance': '~290 KM',
        'duration': '5 - 5.5 Hours',
        'url': 'https://rajvee-cab.github.io/rajkot-to-vadodara-cab/'
    },
    {
        'file': 'src/app/rajkot-to-jamnagar-cab/page.jsx',
        'origin': 'Rajkot',
        'destination': 'Jamnagar',
        'price': '₹1,599',
        'distance': '~92 KM',
        'duration': '1.5 - 2 Hours',
        'url': 'https://rajvee-cab.github.io/rajkot-to-jamnagar-cab/'
    },
    {
        'file': 'src/app/rajkot-to-somnath-cab/page.jsx',
        'origin': 'Rajkot',
        'destination': 'Somnath',
        'price': '₹3,299',
        'distance': '~200 KM',
        'duration': '3.5 - 4 Hours',
        'url': 'https://rajvee-cab.github.io/rajkot-to-somnath-cab/'
    },
    {
        'file': 'src/app/rajkot-to-dwarka-cab/page.jsx',
        'origin': 'Rajkot',
        'destination': 'Dwarka',
        'price': '₹3,699',
        'distance': '~225 KM',
        'duration': '4 - 4.5 Hours',
        'url': 'https://rajvee-cab.github.io/rajkot-to-dwarka-cab/'
    },
    {
        'file': 'src/app/rajkot-to-morbi-cab/page.jsx',
        'origin': 'Rajkot',
        'destination': 'Morbi',
        'price': '₹1,199',
        'distance': '~65 KM',
        'duration': '1 - 1.5 Hours',
        'url': 'https://rajvee-cab.github.io/rajkot-to-morbi-cab/'
    },
    {
        'file': 'src/app/ahmedabad-to-surat-cab/page.jsx',
        'origin': 'Ahmedabad',
        'destination': 'Surat',
        'price': '₹3,699',
        'distance': '~265 KM',
        'duration': '4.5 - 5 Hours',
        'url': 'https://rajvee-cab.github.io/ahmedabad-to-surat-cab/'
    },
    {
        'file': 'src/app/ahmedabad-to-vadodara-cab/page.jsx',
        'origin': 'Ahmedabad',
        'destination': 'Vadodara',
        'price': '₹1,999',
        'distance': '~110 KM',
        'duration': '1.5 - 2 Hours',
        'url': 'https://rajvee-cab.github.io/ahmedabad-to-vadodara-cab/'
    },
    {
        'file': 'src/app/ahmedabad-to-mumbai-cab/page.jsx',
        'origin': 'Ahmedabad',
        'destination': 'Mumbai',
        'price': '₹8,499',
        'distance': '~525 KM',
        'duration': '9 - 10 Hours',
        'url': 'https://rajvee-cab.github.io/ahmedabad-to-mumbai-cab/'
    },
    {
        'file': 'src/app/ahmedabad-to-statue-of-unity-cab/page.jsx',
        'origin': 'Ahmedabad',
        'destination': 'Statue of Unity',
        'price': '₹2,999',
        'distance': '~195 KM',
        'duration': '3.5 - 4 Hours',
        'url': 'https://rajvee-cab.github.io/ahmedabad-to-statue-of-unity-cab/'
    },
    {
        'file': 'src/app/surat-to-mumbai-cab/page.jsx',
        'origin': 'Surat',
        'destination': 'Mumbai',
        'price': '₹4,999',
        'distance': '~280 KM',
        'duration': '5 - 5.5 Hours',
        'url': 'https://rajvee-cab.github.io/surat-to-mumbai-cab/'
    }
]

for r in static_routes:
    with open(r['file'], 'r', encoding='utf-8') as f:
        code = f.read()

    # 1. Update Title tag if needed
    new_title = f"{r['origin']} to {r['destination']} Cab @ {r['price']} | One-Way Taxi - Rajvee Cab"
    code = re.sub(r"title:\s*['\"][^'\"]+['\"]", f"title: '{new_title}'", code, count=1)

    # 2. Update TaxiService schema to LocalBusiness & AutoRental
    code = re.sub(r"@type':\s*'TaxiService'", "@type': ['LocalBusiness', 'AutoRental']", code)

    # 3. Add Breadcrumb and FAQ schema definitions before return
    schemas_to_add = f"""
  const breadcrumbSchema = {{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rajvee-cab.github.io/' }},
      {{ '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://rajvee-cab.github.io/#routes' }},
      {{ '@type': 'ListItem', position: 3, name: '{r["origin"]} to {r["destination"]} Cab', item: '{r["url"]}' }}
    ]
  }};

  const faqSchema = {{
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {{
        '@type': 'Question',
        name: 'What is the taxi fare from {r["origin"]} to {r["destination"]}?',
        acceptedAnswer: {{
          '@type': 'Answer',
          text: 'One-way AC Sedan taxi from {r["origin"]} to {r["destination"]} starts at {r["price"]} with zero return fare charges. SUVs like Maruti Ertiga and Innova Crysta are also available.'
        }}
      }},
      {{
        '@type': 'Question',
        name: 'What is the travel distance from {r["origin"]} to {r["destination"]}?',
        acceptedAnswer: {{
          '@type': 'Answer',
          text: 'The approximate highway distance from {r["origin"]} to {r["destination"]} is {r["distance"]}, taking around {r["duration"]} of comfortable driving.'
        }}
      }},
      {{
        '@type': 'Question',
        name: 'Do I have to pay return charges for a one-way cab?',
        acceptedAnswer: {{
          '@type': 'Answer',
          text: 'No, you pay only for the one-sided journey from {r["origin"]} to {r["destination"]}. There are zero hidden fees or return kms.'
        }}
      }},
      {{
        '@type': 'Question',
        name: 'How do I book a cab from {r["origin"]} to {r["destination"]}?',
        acceptedAnswer: {{
          '@type': 'Answer',
          text: 'Instant booking is available by calling +91 97378 72972 or messaging on WhatsApp for immediate vehicle confirmation.'
        }}
      }}
    ]
  }};
"""

    if 'breadcrumbSchema' not in code:
        # insert before 'return ('
        code = code.replace('  return (', schemas_to_add + '\n  return (')
        # insert scripts into JSX right after routeSchema script
        script_injection = """      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
"""
        code = code.replace('dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}\n      />',
                            'dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}\n      />\n' + script_injection)

    with open(r['file'], 'w', encoding='utf-8') as f:
        f.write(code)

    print(f"Updated: {r['file']}")

print("All 11 static routes updated successfully!")
