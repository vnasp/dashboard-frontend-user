import{j as e,r as i,m as l,R as d,H as u}from"./vendor-Cg58ssI3.js";import{L as h,A as m,M as g,a as j,u as p,D as x,N as f,b,c as N}from"./components-BV3Y0RMx.js";import"./utils-WGHN_NGi.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}})();function _(){return e.jsxs("aside",{className:"navigation",children:[e.jsx(h,{}),e.jsx(m,{}),e.jsx(g,{}),e.jsx(j,{})]})}function v(){const{graphParameters:r}=p(),a=()=>r.stations!=null&&r.stations.length>0&&r.devices!=null&&r.devices.length>0&&r.dateRange.start!=null&&r.dateRange.end!=null;return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"projects__view",children:[e.jsx("article",{className:"projects__selector",children:e.jsx(x,{})}),e.jsx("article",{className:"projects__graph",children:a()?e.jsx(f,{}):e.jsx(b,{})})]})})}function y(){const[r,a]=i.useState("general"),o=n=>{a(n)};return e.jsx(e.Fragment,{children:e.jsxs("main",{className:"dashboard",children:[e.jsxs("section",{className:"dashboard__header",children:[e.jsxs("div",{className:"dashboard__project",children:[e.jsx("h1",{className:"dashboard__project--title",children:"Proyecto 1"}),e.jsxs("div",{className:"dashboard__badges",children:[e.jsx("span",{className:"dashboard__badge",children:"Segmento 1"}),e.jsx("span",{className:"dashboard__badge",children:"Antropológico"})]})]}),e.jsxs("div",{className:"dashboard__views",children:[e.jsx("button",{className:`btn ${r==="general"?"bg-acustica-primary hover:bg-acustica-hover":"bg-gray-400"}`,onClick:()=>o("general"),children:"Vista por Proyecto"}),e.jsx("button",{className:`btn ${r==="category"?"bg-acustica-primary hover:bg-acustica-hover":"bg-gray-400"}`,onClick:()=>o("category"),disabled:!0,children:"Vista por Definir"})]})]}),r==="general"?e.jsx(v,{}):""]})})}function P(){return e.jsxs(e.Fragment,{children:[e.jsx(_,{}),e.jsx(y,{})]})}l.createRoot(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(u,{children:e.jsx(N,{children:e.jsx(P,{})})})}));