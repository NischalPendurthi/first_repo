const button = document.getElementById('post-btn');
console.log('clicked')

button.addEventListener('click', async _ => {
    try {     
    const response = await fetch('http://localhost:3000/generate', {
      method: 'post',
      body: {
        "prompt":"Write 3 points about India"
      }
    });
    console.log('Completed!', response);
  } catch(err) {
    console.error(`Error: ${err}`);
  }
});