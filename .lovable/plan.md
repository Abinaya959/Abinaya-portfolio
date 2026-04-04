

## Plan: Integrate EmailJS with Contact Form

Since these are public keys (EmailJS public key, template ID, service ID are all client-side safe), they will be stored directly in the codebase.

### Steps

1. **Install `@emailjs/browser` package** — the official EmailJS SDK for React.

2. **Update `ContactSection.tsx`**:
   - Import `emailjs` from `@emailjs/browser`
   - Add loading and status state (`sending`, `sent`, `error`)
   - Wire up the `onSubmit` handler to call `emailjs.send()` with:
     - Service ID: `service_lt802kf`
     - Template ID: `template_esm2qhr`
     - Public Key: `G9Udl8ADP-8ALnT8q`
     - Template params: `{ from_name, from_email, message }`
   - Show a toast notification on success/failure
   - Disable the button and show "Sending..." while in progress
   - Reset the form on success

3. **Add toast feedback** using the existing `sonner` toast (already in the project) to show success/error messages.

### Notes
- The EmailJS template must have matching variable names (`from_name`, `from_email`, `message`) — if your template uses different variable names, we can adjust.
- No backend needed — EmailJS sends directly from the browser.

