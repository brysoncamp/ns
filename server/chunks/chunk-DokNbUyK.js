import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
/* empty css               */
const Topbar = ({ topbarRef, topbarTop }) => {
  return /* @__PURE__ */ jsxs("div", { className: "topbar", ref: topbarRef, style: { top: `${topbarTop}px` }, children: [
    /* @__PURE__ */ jsxs("a", { href: "/", className: "logo-text", children: [
      /* @__PURE__ */ jsxs("span", { className: "logo-text-highlight", children: [
        "n",
        /* @__PURE__ */ jsx("span", { className: "logo-hide", children: "ame" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "logo-hide", children: "scraper" }),
      /* @__PURE__ */ jsx("span", { className: "asterisk", children: "*" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "signup-button", children: "Sign up" })
  ] });
};
function Layout({ children }) {
  return /* @__PURE__ */ jsxs(React.StrictMode, { children: [
    /* @__PURE__ */ jsx(Topbar, {}),
    /* @__PURE__ */ jsx(Content, { children })
  ] });
}
function Content({ children }) {
  return /* @__PURE__ */ jsx("div", { children });
}
const import3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout
}, Symbol.toStringTag, { value: "Module" }));
export {
  import3 as i
};
