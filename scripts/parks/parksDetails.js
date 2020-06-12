    const parkDetailsConverter = (object, city) => {

    const eateryHTMLRepresentation = `<div class="modal-content">
            <span class="close">&times;</span>
            <h4>${object.fullName}</h4>
            <div class="content">
                <dl>
                    <dt>City</dt>
                    <dd>${city}</dd>
                    <dt>State</dt>
                    <dd>${object.states}</dd>
                    <dt>Description</dt>
                    <dd>${object.description}</dd>
                </dl>
            </div>
        </div>`
          
            return eateryHTMLRepresentation
 }
