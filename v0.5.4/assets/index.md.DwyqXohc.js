import{_ as s,c as i,o as a,a7 as n}from"./chunks/framework.BSX9ibEX.js";const E=JSON.parse('{"title":"Wandb.jl","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}'),t={name:"index.md"},e=n(`<h1 id="Wandb.jl" tabindex="-1">Wandb.jl <a class="header-anchor" href="#Wandb.jl" aria-label="Permalink to &quot;Wandb.jl {#Wandb.jl}&quot;">​</a></h1><p>Unofficial Julia Bindings for <a href="https://wandb.ai" target="_blank" rel="noreferrer">wandb.ai</a>.</p><h2 id="Installation" tabindex="-1">Installation <a class="header-anchor" href="#Installation" aria-label="Permalink to &quot;Installation {#Installation}&quot;">​</a></h2><p>For stable release:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] add Wandb</span></span></code></pre></div><p>For the <code>main</code> branch:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] add Wandb</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#main</span></span></code></pre></div><h2 id="Quick-Start" tabindex="-1">Quick Start <a class="header-anchor" href="#Quick-Start" aria-label="Permalink to &quot;Quick Start {#Quick-Start}&quot;">​</a></h2><p>Follow the <a href="https://docs.wandb.ai/quickstart" target="_blank" rel="noreferrer">quickstart</a> points 1 and 2 to get started with a Wandb account.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Wandb, Logging</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Initialize the project</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> WandbLogger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; project </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Wandb.jl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nothing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Set logger globally / in scope / in combination with other loggers</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">global_logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lg)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Logging Values</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Wandb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lg, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;accuracy&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;loss&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Even more conveniently</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@info</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;metrics&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> accuracy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> loss</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@debug</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;metrics&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> not_print</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Will have to change debug level for this to be logged</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Tracking Hyperparameters</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">update_config!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lg, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dropout&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Close the logger</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lg)</span></span></code></pre></div><h2 id="Examples" tabindex="-1">Examples <a class="header-anchor" href="#Examples" aria-label="Permalink to &quot;Examples {#Examples}&quot;">​</a></h2><p>To see the logging in action go <a href="https://wandb.ai/avikpal/Wandb.jl" target="_blank" rel="noreferrer">here</a>. Detailed code for these examples can be accessed via the navigation menu.</p><h2 id="Running-into-Issues" tabindex="-1">Running into Issues <a class="header-anchor" href="#Running-into-Issues" aria-label="Permalink to &quot;Running into Issues {#Running-into-Issues}&quot;">​</a></h2><p>Please have a look at the <code>Miscellaneous</code> Section to see if it solves your issue. If not, please report bugs using GitHub Issues. For usage questions post them on Discourse (<code>@avik-pal</code>) or Julia Slack (#helpdesk channel) (<code>@avikpal</code>) tagging me.</p>`,14),l=[e];function h(p,k,r,o,d,g){return a(),i("div",null,l)}const u=s(t,[["render",h]]);export{E as __pageData,u as default};
