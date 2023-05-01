export const json = {
    "title": "GreenHawks",
    "description": "Welcome to our sustainability survey for the Lehigh community! ",
    "logo": "https://api.surveyjs.io/private/Surveys/files?name=1b9a24e2-7026-496f-8990-ef2dcfa2099d",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "What type of housing do you live in on campus?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item ",
          "text": "Traditional dorm"
         },
         {
          "value": "Item 2",
          "text": "Suite-style dorm/apartment"
         },
         {
          "value": "Item 3",
          "text": "Greek housing"
         },
         {
          "value": "Item 4",
          "text": "Themed housing"
         },
         {
          "value": "Item 5",
          "text": "Off-campus"
         }
        ],
        "showOtherItem": true
       },
       {
        "type": "radiogroup",
        "name": "question2",
        "title": "How do you typically get around campus?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Walking"
         },
         {
          "value": "Item 2",
          "text": "Biking/skateboarding"
         },
         {
          "value": "Item 7",
          "text": "Driving "
         },
         {
          "value": "Item 5",
          "text": "Carpooling"
         },
         {
          "value": "Item 4",
          "text": "Campus bus"
         },
         {
          "value": "Item 6",
          "text": "Scooter"
         }
        ],
        "showOtherItem": true
       },
       {
        "type": "radiogroup",
        "name": "question11",
        "visibleIf": "{question2} = 'Item 7'",
        "title": "Is your vehicle electric/hybrid?",
        "requiredIf": "{question2} = 'Item 7'",
        "choices": [
         {
          "value": "Item 1",
          "text": "Yes"
         },
         {
          "value": "Item 2",
          "text": "No"
         },
         {
          "value": "Item 3",
          "text": "I'm not sure"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question4",
        "title": "How often do you use disposable items, such as paper cups or plastic utensils, on campus?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Daily"
         },
         {
          "value": "Item 2",
          "text": "Several times a week"
         },
         {
          "value": "Item 3",
          "text": "Once a week"
         },
         {
          "value": "Item 4",
          "text": "Rarely"
         },
         {
          "value": "Item 5",
          "text": "Never"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question5",
        "title": "How often do you use reusable containers, such as water bottles or food containers, on campus?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Daily"
         },
         {
          "value": "Item 2",
          "text": "Several times a week"
         },
         {
          "value": "Item 3",
          "text": "Once a week"
         },
         {
          "value": "Item 4",
          "text": "Rarely"
         },
         {
          "value": "Item 5",
          "text": "Never"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question66",
        "title": "How often do you use energy-saving features, such as turning off lights or unplugging electronics, in your dorm or apartment?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Daily"
         },
         {
          "value": "Item 2",
          "text": "Several times a week"
         },
         {
          "value": "Item 3",
          "text": "Once a week"
         },
         {
          "value": "Item 4",
          "text": "Rarely"
         },
         {
          "value": "Item 5",
          "text": "Never"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question77",
        "title": "How often do you recycle on campus?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Daily"
         },
         {
          "value": "Item 2",
          "text": "Several times a week"
         },
         {
          "value": "Item 3",
          "text": "Once a week"
         },
         {
          "value": "Item 4",
          "text": "Rarely"
         },
         {
          "value": "Item 5",
          "text": "Never"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question8",
        "title": "How familiar are you with the sustainability initiatives on campus?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1Somew",
          "text": "Very familiar"
         },
         {
          "value": "Item 2",
          "text": "Somewhat familiar"
         },
         {
          "value": "Item 3",
          "text": "Not very familiar"
         },
         {
          "value": "Item 4",
          "text": "Not at all familiar  "
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question9",
        "title": "Have you ever participated in a sustainability-related event or activity on campus?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Yes"
         },
         {
          "value": "Item 2",
          "text": "No"
         },
         {
          "value": "Item 3",
          "text": "I'm not sure"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question3",
        "title": "How important is sustainability to you personally?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Very important"
         },
         {
          "value": "Item 2",
          "text": "Somewhat important"
         },
         {
          "value": "Item 3",
          "text": "Not very important"
         },
         {
          "value": "Item 4",
          "text": "Not at all important"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question10",
        "title": "What sustainability-related topics would you be interested in learning more about?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Energy conservation"
         },
         {
          "value": "Item 2",
          "text": "Waste reduction and recycling"
         },
         {
          "value": "Item 3",
          "text": "Sustainable transportation"
         },
         {
          "value": "Item 4",
          "text": "Local food and agriculture"
         },
         {
          "value": "Item 6",
          "text": "Climate change"
         }
        ],
        "showOtherItem": true
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "html",
        "name": "question16",
        "html": "<p><b>Housing</b></p>"
       },
       {
        "type": "html",
        "name": "question12",
        "visibleIf": "{question1} = 'Item ' or {question1} = 'Item 2'",
        "title": "dsajkfbkjsabfjksf",
        "hideNumber": true,
        "html": "<p> &#9734; Based on your type of housing, consider using power strips to easily turn off multiple electronics at once and reduce energy waste. Use reusable containers for food storage and meal prep to reduce waste.</p>"
       },
       {
        "type": "html",
        "name": "question13",
        "visibleIf": "{question1} = 'Item 3' or {question1} = 'Item 4'",
        "hideNumber": true,
        "html": "<p> &#9734; Based on your type of housing, consider organizing sustainability-focused events or activities for residents, such as a clothing swap or a sustainable food potluck.</p>"
       },
       {
        "type": "html",
        "name": "question14",
        "visibleIf": "{question1} = 'Item 5'",
        "html": "<p> &#9734; Since you have more flexibility in customizing your living space, consider investing in sustainable housing equipment. Use reusable containers for food storage and meal prep to reduce waste. </p>"
       },
       {
        "type": "html",
        "name": "question15",
        "visibleIf": "{question1} = 'other'",
        "html": "<p>&#9734; If your type of housing is not listed as an option, do your best to make your living space sustainable. Learn more about Lehigh's Sustainable Living Program <a href=\"https://sustainability.lehigh.edu/sustainable-living-program\">here</a>.</p>\n"
       },
       {
        "type": "html",
        "name": "question17",
        "html": "<p><b>Transportation</b></p>"
       },
       {
        "type": "html",
        "name": "question18",
        "visibleIf": "{question2} = 'Item 1'",
        "hideNumber": true,
        "html": "<p> &#9734; Keep up the good work! Walking is a great way to reduce carbon emissions and stay active.</p>\n"
       },
       {
        "type": "html",
        "name": "question19",
        "visibleIf": "{question2} = 'Item 2' or {question2} = 'Item 6'",
        "hideNumber": true,
        "html": "<p>&#9734; Biking, skateboarding, or using a scooter is another great way to get around campus. Look into bike-sharing programs on campus. Although Lehigh has paused its bike-sharing program, Bethlehem offers a free program called Bike Bethlehem. More information can be found <a href=\"https://www.bapl.org/bike-bethlehem-is-back-at-bapl/\">here</a>.</p>"
       },
       {
        "type": "html",
        "name": "question20",
        "visibleIf": "{question2} = 'Item 5'",
        "hideNumber": true,
        "html": "<p> &#9734; Carpooling is a much more sustainable means of transportation compared to driving alone.  Lehigh also has a ride-sharing program called Zimride that allows you to find others on campus to carpool with. Visit the Zimride website for more information. </p>\n"
       },
       {
        "type": "html",
        "name": "question21",
        "visibleIf": "{question2} = 'Item 4'",
        "hideNumber": true,
        "html": "<p>&#9734; Keep up the good work! Taking the bus is a great way to reduce carbon emissions and get around campus. Lehigh’s transit route details can be found <a href=\"https://businessservices.lehigh.edu/transit-route-information\">here</a>.</p>\n"
       },
       {
        "type": "html",
        "name": "question22",
        "visibleIf": "{question2} = 'other'",
        "hideNumber": true,
        "html": "<p> &#9734; If you use any other means of transportation, make sure to consider sustainable transportation methods, such as walking, Lehigh-provided transportation, electric scooters, etc to reduce carbon emissions. </p>\n"
       },
       {
        "type": "html",
        "name": "question23",
        "visibleIf": "{question11} = 'Item 1'",
        "hideNumber": true,
        "html": "<p> &#9734; Driving an electric or hybrid vehicle is a great way to reduce your carbon footprint. Utilize the electric vehicle charging stations available on campus. Lehigh University has several electric vehicle charging stations available to students, faculty, and staff, making it easier for them to charge their electric-powered vehicles on campus. Additionally, consider carpooling to further reduce the carbon footprint of you and your peers. More details on Lehigh's EV charging policy can be found <a href=\"https://financeadmin.lehigh.edu/content/ev-charging-station-policy\">here</a>.</p>\n"
       },
       {
        "type": "html",
        "name": "question24",
        "visibleIf": "{question11} = 'Item 2'",
        "hideNumber": true,
        "html": "<p> &#9734; If possible, consider switching to an electric or hybrid vehicle. Lehigh has charging stations on campus that are free to use for students, faculty, and staff. Using electric or hybrid vehicles can significantly reduce greenhouse gas emissions and air pollution. </p>\n"
       },
       {
        "type": "html",
        "name": "question25",
        "visibleIf": "{question11} = 'Item 3'",
        "hideNumber": true,
        "html": "<p> &#9734;  If you're not sure whether your vehicle is electric/hybrid: Find out! Knowing the fuel efficiency of your vehicle can help you make informed choices about how to get around campus sustainably. You can check your vehicle's fuel efficiency rating <a href=\"https://fueleconomy.gov/\">here</a>. </p>\n"
       },
       {
        "type": "html",
        "name": "question32",
        "hideNumber": true,
        "html": "<p><b>Disposable Items</b></p>\n"
       },
       {
        "type": "html",
        "name": "question31",
        "visibleIf": "{question4} = 'Item 1' or {question4} = 'Item 2'",
        "hideNumber": true,
        "html": "<p> &#9734; Consider bringing your own reusable cup or mug for drinks. Also, try bringing your own reusable utensils for meals. Look for food vendors throughout the Lehigh community that offer compostable or recyclable containers.</p>\n"
       },
       {
        "type": "html",
        "name": "question27",
        "visibleIf": "{question4} = 'Item 3' or {question4} = 'Item 4' or {question4} = 'Item 5'",
        "hideNumber": true,
        "html": "<p> &#9734; You are doing well by not utilizing disposable items as much. Try to use reusable containers or utensils whenever possible to reduce waste. </p>\n"
       },
       {
        "type": "html",
        "name": "question26",
        "hideNumber": true,
        "html": "<p><b>Importance of Sustainability</b></p>\n"
       },
       {
        "type": "html",
        "name": "question28",
        "visibleIf": "{question3} = 'Item 1'",
        "hideNumber": true,
        "html": "<p> &#9734; Consider making sustainable choices a priority in your daily life and encouraging others to do the same. </p>\n"
       },
       {
        "type": "html",
        "name": "question29",
        "visibleIf": "{question3} = 'Item 2'",
        "hideNumber": true,
        "html": "<p> &#9734; Look for ways to incorporate sustainable practices into your daily routine and try to make small changes to reduce your environmental impact. Learn more <a href=\"https://sustainability.lehigh.edu/\">here</a>. </p>\n\n"
       },
       {
        "type": "html",
        "name": "question30",
        "visibleIf": "{question3} = 'Item 3' or {question3} = 'Item 4'",
        "hideNumber": true,
        "html": "<p> &#9734; Consider learning more about sustainability and its importance for the planet and future generations. Learn more <a href=\"https://sustainability.lehigh.edu/\">here</a>. </p>\n\n"
       },
       {
        "type": "html",
        "name": "question33",
        "hideNumber": true,
        "html": "<p><b>Reusable Items</b></p>\n"
       },
       {
        "type": "html",
        "name": "question34",
        "visibleIf": "{question5} = 'Item 1' or {question5} = 'Item 2'",
        "hideNumber": true,
        "html": "<p> &#9734; Great job! Continue or increase using reusable items to reduce waste.</p>"
       },
       {
        "type": "html",
        "name": "question35",
        "visibleIf": "{question5} = 'Item 3' or {question5} = 'Item 4' or {question5} = 'Item 5'",
        "hideNumber": true,
        "html": "<p> &#9734; Consider bringing your own reusable containers for meals and snacks to reduce waste. </p>"
       },
       {
        "type": "html",
        "name": "question36",
        "hideNumber": true,
        "html": "<p><b>Energy-saving features</b></p>"
       },
       {
        "type": "html",
        "name": "question7",
        "visibleIf": "{question66} = 'Item 1'",
        "hideNumber": true,
        "html": "<p> &#9734; Keep up the good work! Turning off lights and electronics when not in use is a great way to save energy and reduce electricity bills. </p>\n"
       },
       {
        "type": "html",
        "name": "question6",
        "visibleIf": "{question66} = 'Item 2'",
        "hideNumber": true,
        "html": "<p> &#9734; Try to make turning off lights and electronics a daily habit.\n </p>\n"
       },
       {
        "type": "html",
        "name": "question37",
        "visibleIf": "{question66} = 'Item 3' or {question66} = 'Item 4' or {question66} = 'Item 5'",
        "hideNumber": true,
        "html": "<p> &#9734; Make a conscious effort to turn off lights and electronics when not in use to save energy.\n </p>\n"
       },
       {
        "type": "html",
        "name": "question38",
        "hideNumber": true,
        "html": "<p><b>Recycling</b></p>"
       },
       {
        "type": "html",
        "name": "question39",
        "visibleIf": "{question77} = 'Item 1'",
        "hideNumber": true,
        "html": "<p> &#9734;  Keep up the good work! Recycling is a great way to reduce waste and conserve natural resources.\n </p>"
       },
       {
        "type": "html",
        "name": "question40",
        "visibleIf": "{question77} = 'Item 2'",
        "hideNumber": true,
        "html": "<p> &#9734;  Try to recycle whenever possible to reduce waste.\nMore details on recycling at Lehigh can be found <a href=\"https://sustainability.lehigh.edu/waste-and-recycling#:~:text=At%20Lehigh%2C%20clean%20and%20empty,next%20to%20the%20blue%20bin.&text=Lehigh%20collects%20and%20recycles%20plastic,separately%20from%20single%20stream%20recycling\">here</a>. </p>"
       },
       {
        "type": "html",
        "name": "question41",
        "visibleIf": "{question77} = 'Item 3' or {question77} = 'Item 4' or {question77} = 'Item 5'",
        "hideNumber": true,
        "html": "<p> &#9734;  Make a conscious effort to recycle to reduce waste.\nMore details on recycling at Lehigh can be found <a href=\"https://sustainability.lehigh.edu/waste-and-recycling#:~:text=At%20Lehigh%2C%20clean%20and%20empty,next%20to%20the%20blue%20bin.&text=Lehigh%20collects%20and%20recycles%20plastic,separately%20from%20single%20stream%20recycling\">here</a>. </p>"
       },
       {
        "type": "html",
        "name": "question42",
        "hideNumber": true,
        "html": "<p><b>Familiarity with sustainability initiatives</b></p>"
       },
       {
        "type": "html",
        "name": "question43",
        "visibleIf": "{question8} = 'Item 1Somew'",
        "hideNumber": true,
        "html": "<p> &#9734; Great job on actively learning about sustainability initiatives. Consider becoming involved with existing sustainability initiatives on campus or starting your own sustainability project.\n </p>"
       },
       {
        "type": "html",
        "name": "question45",
        "visibleIf": "{question8} = 'Item 2'",
        "hideNumber": true,
        "html": "<p> &#9734;  Look into sustainability-related events and activities on campus to learn more. A great starting point is reading through  <a href=\"https://sustainability.lehigh.edu/\">'Lehigh Sustainability'</a>. </p>"
       },
       {
        "type": "html",
        "name": "question44",
        "visibleIf": "{question8} = 'Item 3' or {question8} = 'Item 4'",
        "hideNumber": true,
        "html": "<p> &#9734;  Check out the sustainability section on the Lehigh University website or attend a sustainability-related event or activity on campus. A great starting point is reading through <a href=\"https://sustainability.lehigh.edu/\">'Lehigh Sustainability'</a>. </p>"
       },
       {
        "type": "html",
        "name": "question48",
        "hideNumber": true,
        "html": "<p><b>Participation in sustainability-related events</b></p>"
       },
       {
        "type": "html",
        "name": "question47",
        "visibleIf": "{question9} = 'Item 1'",
        "hideNumber": true,
        "html": "<p>&#9734; Keep up the good work! Participating in sustainability-related events is a great way to learn more and make a positive impact.<br><br> </p>\n<p> &#9734; Consider becoming more involved in existing sustainability initiatives on campus or starting your own sustainability project. You can also encourage others to get involved in sustainability-related events and activities. <br><br></p>\n<p> &#9734; By actively participating in sustainable practices, you can help to create a more environmentally conscious community at Lehigh University.</p>\n"
       },
       {
        "type": "html",
        "name": "question46",
        "visibleIf": "{question9} = 'Item 2' or {question9} = 'Item 3'",
        "hideNumber": true,
        "html": "<p>&#9734;  Look for sustainability-related events and activities on campus to get involved in. <br><br> </p>\n<p>&#9734;  A great start is learning about the various sustainability-related initiatives that Lehigh has to offer such as the <a href=\"https://sustainability.lehigh.edu/erlp\">Eco-Reps program</a>, the <a href=\"https://sustainability.lehigh.edu/greenfund-grants-greener-campus\">Green Fund</a>, and the <a href=\"https://sustainability.lehigh.edu/sig\">Sustainability Initiative</a>.   <br><br></p>\n<p> &#9734; You can also consider joining a student organization focused on sustainability or volunteering with a local environmental group. \n</p>\n"
       },
       {
        "type": "html",
        "name": "question50",
        "hideNumber": true,
        "html": "<p><b>Sustainability-related topics of interest</b></p>"
       },
       {
        "type": "html",
        "name": "question51",
        "visibleIf": "{question10} = 'Item 1'",
        "hideNumber": true,
        "html": "<p> &#9734; Consider learning more about ways to save energy in your living space, such as using energy-efficient light bulbs or adjusting thermostat settings.\n </p>"
       },
       {
        "type": "html",
        "name": "question49",
        "visibleIf": "{question10} = 'Item 2'",
        "hideNumber": true,
        "html": "<p> &#9734;  Look for ways to reduce waste, such as composting or using reusable products, and learn about the recycling process on campus\n <a href=\"https://sustainability.lehigh.edu/recycling\">here</a>. </p>"
       },
       {
        "type": "html",
        "name": "question52",
        "visibleIf": "{question10} = 'Item 3'",
        "hideNumber": true,
        "html": "<p> &#9734;  Consider sustainable modes of transportation, such as biking or using public transportation, to reduce your carbon footprint. Lehigh’s DoubleMap application allows students and staff to access bus routes throughout campus. Learn more about transportation at Lehigh\n <a href=\"https://businessservices.lehigh.edu/departments/transportation-office\">here</a>. </p>"
       },
       {
        "type": "html",
        "name": "question53",
        "visibleIf": "{question10} = 'Item 4'",
        "hideNumber": true,
        "html": "<p> &#9734;  Learn about local food systems and the benefits of supporting local farmers and producers. You can buy local produce within Lehigh Valley \n <a href=\"https://www.buylocalglv.org/local-food-map/\">here</a>. </p>"
       },
       {
        "type": "html",
        "name": "question54",
        "visibleIf": "{question10} = 'Item 6'",
        "hideNumber": true,
        "html": "<p> &#9734; Explore the science behind climate change and ways to mitigate its effects, such as reducing greenhouse gas emissions. Learn more about what Lehigh is doing for mitigating climate change \n <a href=\"https://sustainability.lehigh.edu/climate-action\">here</a>. </p>"
       },
       {
        "type": "html",
        "name": "question55",
        "visibleIf": "{question10} = 'other'",
        "hideNumber": true,
        "html": "<p> &#9734 Consider researching other sustainability-related topics that interest you, such as sustainable fashion or eco-friendly home products.</p>"
       }
      ],
      "title": "Recommendations"
     }
    ]
   }