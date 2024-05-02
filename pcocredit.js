//Full script

async function getCredits(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        // Authorization header with your Planning Center API key
        'Authorization': 'Bearer YOUR_API_KEY'
      }
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    const data = await response.json();

    // Process the data to build credits
    const credits = processData(data);

    return credits;
  } catch (error) {
    console.error('Error fetching credits:', error);
    return null;
  }
}

function processData(data) {
  // Implement your logic here to build credits based on the API response structure
  // This example assumes 'attributes' key holds relevant data for credits

  const credits = data.attributes.map(attribute => {
    // Extract credit details from 'attribute' object
    const creditType = attribute.credit_type;
    const creditValue = attribute.credit_value;

    // Build credit object or perform actions based on credit data
    return {
      type: creditType,
      value: creditValue
    };
  });

  return credits;
}

// Replace 'YOUR_API_KEY' with your actual Planning Center API key
const apiKey = 'YOUR_API_KEY';
const baseUrl = 'https://api.planningcenteronline.com/services/v2/service_types/1/team_positions/1/person_team_position_assignments';
const url = `${baseUrl}?api_key=${apiKey}`;

getCredits(url)
  .then(credits => {
    if (credits) {
      console.log('Credits:', credits);
      // Use the retrieved credits for your application logic
    } else {
      console.error('Failed to retrieve credits.');
    }
  })
  .catch(error => console.error('Error building credits:', error));
