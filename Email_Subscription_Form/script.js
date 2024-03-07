let spn = document.getElementById('Sub_spn');

const scriptURL = 'https://script.google.com/macros/s/AKfycbxzUtUc_BgLB_r_bbnDMl4tpkfzoct7i-g2ExziAqpK6pl0P2DLq7EYByn2qWdQEi92/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        spn.innerHTML = 'Thank You for Subscription!'
        setTimeout(()=>{
            spn.innerHTML = ""
        },5000)
        
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })