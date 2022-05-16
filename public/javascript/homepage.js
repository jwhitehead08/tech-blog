async function homeLoad() {
    console.log('here i am');
    const response = await fetch('/dashboard/', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      });
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
    

  document.querySelector('#homeBtn').addEventListener('click', homeLoad);