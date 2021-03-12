import React from 'react'

function Form() {
  const [formValue, setFormValue] = React.useState({
    name: '',
    age: '',
    origin: '',
    comments: '',
  })

  function handleChange(evt) {
    const value = evt.target.value
    setFormValue({
      ...formValue,
      [evt.target.name]: value,
    })
  }

  const [submitted, setSubmitted] = React.useState(false)

  function sendForm(event) {
    console.log(`Het bericht: "${formValue.comments}" is succesvol verzonden.`)
    setSubmitted(true)
    event.preventDefault()
  }
  return (
    <form onSubmit={sendForm}>
      <fieldset>
        <legend>Gegevens</legend>
        <label htmlFor="name">
          Naam:
          <input
            type="text"
            id="name"
            name="name"
            value={formValue.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="age">
          Leeftijd:
          <input
            type="number"
            id="age"
            name="age"
            value={formValue.age}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Jouw review</legend>
        <label className="origin--label" htmlFor="origin">
          Hoe heb je dit recept gevonden?
          <select
            className="origin--select"
            name="origin"
            id="origin"
            value={formValue.origin}
            onChange={handleChange}
          >
            <option value="Google">Google</option>
            <option value="Friend">Vriend</option>
            <option value="Advert">Advertentie</option>
            <option value="Other">Anders</option>
          </select>
        </label>
        <label htmlFor="comments">
          <textarea
            name="comments"
            id="comments"
            cols="30"
            rows="10"
            placeholder="Wat vond je van het recept?"
            value={formValue.comments}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Versturen</button>
      </fieldset>
    </form>
  )
}

export default Form
