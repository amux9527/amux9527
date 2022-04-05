import{_ as e,c as n,o as a,d}from"./app.a6505855.js";const _='{"title":"\u5B89\u88C5\u865A\u62DF\u73AF\u5883","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5\u865A\u62DF\u73AF\u5883","slug":"\u5B89\u88C5\u865A\u62DF\u73AF\u5883"},{"level":2,"title":"\u865A\u62DF\u73AF\u5883\u6362\u6E90","slug":"\u865A\u62DF\u73AF\u5883\u6362\u6E90"},{"level":2,"title":"conda\u5E38\u7528\u547D\u4EE4","slug":"conda\u5E38\u7528\u547D\u4EE4"},{"level":2,"title":"pip\u4E0B\u8F7D\u65F6\u6307\u5B9A\u6E90","slug":"pip\u4E0B\u8F7D\u65F6\u6307\u5B9A\u6E90"}],"relativePath":"mini/index.md"}',o={},t=d(`<h2 id="\u5B89\u88C5\u865A\u62DF\u73AF\u5883" tabindex="-1">\u5B89\u88C5\u865A\u62DF\u73AF\u5883 <a class="header-anchor" href="#\u5B89\u88C5\u865A\u62DF\u73AF\u5883" aria-hidden="true">#</a></h2><p>\u4E0B\u8F7D<a href="https://docs.conda.io/en/latest/miniconda.html#" target="_blank" rel="noopener noreferrer">Miniconda</a></p><p>\u5982\u679C\u6CA1\u6709\u52FE\u9009\u914D\u7F6E\u5230\u73AF\u5883\u53D8\u91CF\u9700\u8981\u81EA\u5DF1\u624B\u52A8\u914D\u7F6E</p><p>windows10\u5728<strong>\u9AD8\u7EA7\u7CFB\u7EDF\u8BBE\u7F6E</strong> -&gt; <strong>\u73AF\u5883\u53D8\u91CF</strong> -&gt; <strong>Path</strong>\u4E2D\u6DFB\u52A0<strong>Miniconda\u5B89\u88C5\u7684\u8DEF\u5F84\u4E0B\u7684Script</strong>\u76EE\u5F55</p><p>\u6253\u5F00powershell\u8F93\u5165</p><div class="language-sh"><pre><code>conda -V
</code></pre></div><p>\u8F93\u51FA\u7248\u672C\u53F7\u8BF4\u660E\u5DF2\u7ECF\u5B89\u88C5\u6210\u529F</p><h2 id="\u865A\u62DF\u73AF\u5883\u6362\u6E90" tabindex="-1">\u865A\u62DF\u73AF\u5883\u6362\u6E90 <a class="header-anchor" href="#\u865A\u62DF\u73AF\u5883\u6362\u6E90" aria-hidden="true">#</a></h2><p>windows\u53EF\u80FD\u9700\u8981\u5148\u521D\u59CB\u5316\u4E00\u4E0Bconda\u73AF\u5883,\u8F93\u5165</p><div class="language-sh"><pre><code>conda init
</code></pre></div><p>\u6362\u6E90</p><div class="language-sh"><pre><code>conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/

conda config --set show_channel_urls yes
</code></pre></div><p>powershell\u5982\u679C\u4E0D\u5141\u8BB8\u6267\u884C\u5C31\u8F93\u5165</p><div class="language-sh"><pre><code>get-ExecutionPolicy   # \u67E5\u770B\u7CFB\u7EDF\u6267\u884C\u7B56\u7565\u72B6\u6001
 
set-executionpolicy remotesigned # \u4FEE\u6539\u6267\u884C\u7B56\u7565\u72B6\u6001
</code></pre></div><p>\u521B\u5EFA\u65B0\u7684\u865A\u62DF\u73AF\u5883</p><div class="language-sh"><pre><code>conda create -n env python=3.9
</code></pre></div><p>\u5982\u679C\u4E0D\u884C\u6216\u8005\u5F88\u6162,\u53EF\u80FD\u662F\u6362\u6E90\u6CA1\u6709\u6210\u529F,windows10\u627E\u5230\u5F53\u524D\u7528\u6237\u76EE\u5F55\u4E0B\u7684.condarc\u6587\u4EF6,\u4FEE\u6539\u5982\u4E0B(\u6CE8\u610F\u7F29\u8FDB\u683C\u5F0F)</p><div class="language-condarc"><pre><code>ssl_verify: true
show_channel_urls: true

channels:
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/win-64/
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/win-64/
</code></pre></div><h2 id="conda\u5E38\u7528\u547D\u4EE4" tabindex="-1">conda\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#conda\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code>conda list  # \u67E5\u770B\u5B89\u88C5\u4E86\u54EA\u4E9B\u5305
conda env list \u6216\u8005 conda info -e  # \u67E5\u770B\u5F53\u524D\u5B58\u5728\u54EA\u4E9B\u865A\u62DF\u73AF\u5883
conda create -n \u865A\u62DF\u73AF\u5883\u540D\u5B57 python=python\u7248\u672C\u53F7 # \u521B\u5EFA\u865A\u62DF\u73AF\u5883
activate \u865A\u62DF\u73AF\u5883\u540D\u5B57 # \u6FC0\u6D3B\u4F60\u7684\u865A\u62DF\u73AF\u5883(Windows)
conda install -n \u865A\u62DF\u73AF\u5883\u540D\u5B57 [\u5305\u540D\u5B57] # \u5B89\u88C5\u5305\u5230\u6307\u5B9A\u7684\u865A\u62DF\u73AF\u5883
# \u5173\u95ED\u865A\u62DF\u73AF\u5883(\u5373\u4ECE\u5F53\u524D\u73AF\u5883\u9000\u51FA\u8FD4\u56DE\u4F7F\u7528PATH\u73AF\u5883\u4E2D\u7684\u9ED8\u8BA4python\u7248\u672C)
deactivate # Windows
# \u5220\u9664\u73AF\u5883\u4E2D\u7684\u67D0\u4E2A\u5305
conda remove --name \u865A\u62DF\u73AF\u5883\u540D\u5B57 \u5305\u540D\u5B57
# \u5220\u9664\u73AF\u5883
conda remove -n \u865A\u62DF\u73AF\u5883\u540D\u5B57 --all
</code></pre></div><h2 id="pip\u4E0B\u8F7D\u65F6\u6307\u5B9A\u6E90" tabindex="-1">pip\u4E0B\u8F7D\u65F6\u6307\u5B9A\u6E90 <a class="header-anchor" href="#pip\u4E0B\u8F7D\u65F6\u6307\u5B9A\u6E90" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code>pip install \u5305\u540D\u5B57 -i https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre></div>`,22),i=[t];function s(c,r,p,l,h,g){return a(),n("div",null,i)}var v=e(o,[["render",s]]);export{_ as __pageData,v as default};
