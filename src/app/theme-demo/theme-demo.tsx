import React from "react";

// ThemeDemo now previews both light and dark themes side-by-side for visual QA
export const ThemeDemo = () => (
  <div className="flex flex-col md:flex-row gap-8 p-8 min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
    {/* Light Theme Preview */}
    <div className="flex-1 border rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4 font-semibold text-gray-500">Light Theme Preview</div>
      <div className="light">
        {/* Headings */}
        <section>
          <h1 className="mb-2">Heading 1 (h1)</h1>
          <h2 className="mb-2">Heading 2 (h2)</h2>
          <div className="main-content mb-2">Main Content Example</div>
          <label className="block mb-2">Form Label Example</label>
        </section>
        {/* Tabs */}
        <section>
          <div className="flex gap-2">
            <button className="tab">Tab</button>
            <button className="tab tab-active">Active Tab</button>
          </div>
        </section>
        {/* Buttons */}
        <section className="space-x-4">
          <button className="button-blue">Button Blue BG</button>
          <button className="button-blue-border">Button Blue Border</button>
          <button className="button-form">Form Button (Submit)</button>
        </section>
        {/* Form & Inputs */}
        <section className="max-w-md">
          <form className="space-y-4">
            <div>
              <label htmlFor="input1-light">Input Label</label>
              <input id="input1-light" placeholder="Input example" className="w-full mt-1" />
            </div>
            <div>
              <label htmlFor="textarea1-light">Textarea Label</label>
              <textarea id="textarea1-light" placeholder="Textarea example" className="w-full mt-1" />
            </div>
            <div>
              <label htmlFor="select1-light">Select Label</label>
              <select id="select1-light" className="w-full mt-1">
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <button type="submit" className="button-form w-full mt-4">Submit</button>
          </form>
        </section>
      </div>
    </div>
    {/* Dark Theme Preview */}
    <div className="flex-1 border rounded-lg bg-[#181c27] p-6 shadow-sm">
      <div className="mb-4 font-semibold text-gray-400">Dark Theme Preview</div>
      <div className="dark">
        {/* Headings */}
        <section>
          <h1 className="mb-2">Heading 1 (h1)</h1>
          <h2 className="mb-2">Heading 2 (h2)</h2>
          <div className="main-content mb-2">Main Content Example</div>
          <label className="block mb-2">Form Label Example</label>
        </section>
        {/* Tabs */}
        <section>
          <div className="flex gap-2">
            <button className="tab">Tab</button>
            <button className="tab tab-active">Active Tab</button>
          </div>
        </section>
        {/* Buttons */}
        <section className="space-x-4">
          <button className="button-blue">Button Blue BG</button>
          <button className="button-blue-border">Button Blue Border</button>
          <button className="button-form">Form Button (Submit)</button>
        </section>
        {/* Form & Inputs */}
        <section className="max-w-md">
          <form className="space-y-4">
            <div>
              <label htmlFor="input1-dark">Input Label</label>
              <input id="input1-dark" placeholder="Input example" className="w-full mt-1" />
            </div>
            <div>
              <label htmlFor="textarea1-dark">Textarea Label</label>
              <textarea id="textarea1-dark" placeholder="Textarea example" className="w-full mt-1" />
            </div>
            <div>
              <label htmlFor="select1-dark">Select Label</label>
              <select id="select1-dark" className="w-full mt-1">
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <button type="submit" className="button-form w-full mt-4">Submit</button>
          </form>
        </section>
      </div>
    </div>
  </div>
);


export default ThemeDemo;
