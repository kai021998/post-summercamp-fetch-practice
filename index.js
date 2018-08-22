const radioheadRemainingMembers = ["Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"]

const addMembersTrigger = document.getElementById('add-members-trigger')

function postData(name) {
  return fetch("http://localhost:3000/members", {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        name: name,
        band_id: 2,
      }
    )
  })
  .then(response => response.json())
  .then(json => console.log(json.band_id))
}

function addRemaningRadioheadMembers() {
  radioheadRemainingMembers.forEach(member => postData(member))
}

addMembersTrigger.addEventListener('click', addRemaningRadioheadMembers)
