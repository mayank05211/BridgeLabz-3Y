// Q4: Custom Form Builder (Forms + Classes)
// Link this file to Q4_Custom_Form_Builder.html and open it in a browser.

class FormBuilder {
    constructor(fields, containerId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
    }

    // Create form controls from the supplied field configuration.
    buildForm() {
        const fieldMarkup = this.fields.map((field, index) => {
            const fieldId = `dynamicField${index}`;
            const safeLabel = field.label.replace(/[&<>"']/g, character => ({
                "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
            })[character]);

            return `
                <div class="form-field">
                    <label for="${fieldId}">${safeLabel}</label>
                    <input
                        id="${fieldId}"
                        name="${safeLabel}"
                        type="${field.type}"
                        placeholder="${safeLabel}"
                        ${field.required ? "required" : ""}
                    >
                </div>
            `;
        }).join("");

        this.container.innerHTML = `
            <form id="generatedForm">
                ${fieldMarkup}
                <button type="submit">Submit</button>
            </form>
            <pre id="formOutput"></pre>
        `;

        document.getElementById("generatedForm").addEventListener("submit", event => {
            event.preventDefault();
            const formData = this.getFormData();
            document.getElementById("formOutput").textContent =
                JSON.stringify(formData, null, 2);
        });
    }

    // Collect all generated field values into an object.
    getFormData() {
        const form = document.getElementById("generatedForm");
        const data = {};

        this.fields.forEach((field, index) => {
            const input = form.elements[`dynamicField${index}`];
            data[field.label] = input.value;
        });

        return data;
    }
}

const registrationFields = [
    { type: "text", label: "Username", required: true },
    { type: "email", label: "Email", required: true },
    { type: "number", label: "Age", required: true }
];

const registrationFormBuilder = new FormBuilder(registrationFields, "formContainer");
registrationFormBuilder.buildForm();
