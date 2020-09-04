## 删改 Shinx 的主题

> [参考内容](https://stackoverflow.com/questions/14622698/customize-sphinxdoc-theme)

1. 根据以下步骤在你的项目中新建一个主题框架

   ```
   $ cd my-sphinx-dir
   $ mkdir -p theme/static
   $ touch theme/theme.conf
   $ touch theme/static/style.css
   ```

2. 打开 t`heme.conf`

   ```
   [theme]
   inherit = default
   stylesheet = style.css
   ```

3. 在 `conf.py` 文件中把主题配置成上述自己写的主题

   ```
   html_theme = 'theme' # use the theme in subdir 'theme'
   html_theme_path = ['../'] # make sphinx search for themes in current dir
   ```

4. 运行 `make html` ，用浏览器打开网页。查看生成的页面是否已经是默认主题（这个时候网页内容是含有 `toc` 和 `footer` 的）

5. 在浏览器上打开`开发者模式`，在开发者模式中，删除不需要的`div`

6. 于是我们可以根据网页上删改好的 `html` 文件编写 `Layout.html`

7. 在 `theme` 文件夹下添加 `Layout.html`。结构如下：

   ```
   theme
   ├── Layout.html
   └── theme.conf
   ```

   以下是我的 `Layout.html` 中的内容

   ```
   {# TEMPLATE VAR SETTINGS #}
   {%- set url_root = pathto('', 1) %}
   {%- if url_root == '#' %}{% set url_root = '' %}{% endif %}
   {%- if not embedded and docstitle %}
     {%- set titlesuffix = " &mdash; "|safe + docstitle|e %}
   {%- else %}
     {%- set titlesuffix = "" %}
   {%- endif %}
   {%- set lang_attr = 'en' if language == None else (language | replace('_', '-')) %}
   {%- set sphinx_writer = 'writer-html5' if html5_doctype else 'writer-html4' %}
   
   <!DOCTYPE html>
   <html class="{{ sphinx_writer }}" lang="{{ lang_attr }}" >
   <head>
     <meta charset="utf-8">
     {{ metatags }}
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     {% block htmltitle %}
     <title>{{ title|striptags|e }}{{ titlesuffix }}</title>
     {% endblock %}
   
     {# CSS #}
     <link rel="stylesheet" href="{{ pathto('_static/' + style, 1) }}" type="text/css" />
     <link rel="stylesheet" href="{{ pathto('_static/pygments.css', 1) }}" type="text/css" />
     {%- for css in css_files %}
       {%- if css|attr("rel") %}
     <link rel="{{ css.rel }}" href="{{ pathto(css.filename, 1) }}" type="text/css"{% if css.title is not none %} title="{{ css.title }}"{% endif %} />
       {%- else %}
     <link rel="stylesheet" href="{{ pathto(css, 1) }}" type="text/css" />
       {%- endif %}
     {%- endfor %}
   
     {%- for cssfile in extra_css_files %}
       <link rel="stylesheet" href="{{ pathto(cssfile, 1) }}" type="text/css" />
     {%- endfor %}
   
     {# FAVICON #}
     {% if favicon %}
       <link rel="shortcut icon" href="{{ pathto('_static/' + favicon, 1) }}"/>
     {% endif %}
     {# CANONICAL URL #}
     {% if theme_canonical_url %}
       <link rel="canonical" href="{{ theme_canonical_url }}{{ pagename }}.html"/>
     {% endif %}
   
     {# JAVASCRIPTS #}
     {%- block scripts %}
     <!--[if lt IE 9]>
       <script src="{{ pathto('_static/js/html5shiv.min.js', 1) }}"></script>
     <![endif]-->
     {%- if not embedded %}
     {# XXX Sphinx 1.8.0 made this an external js-file, quick fix until we refactor the template to inherert more blocks directly from sphinx #}
       {% if sphinx_version >= "1.8.0" %}
         <script type="text/javascript" id="documentation_options" data-url_root="{{ pathto('', 1) }}" src="{{ pathto('_static/documentation_options.js', 1) }}"></script>
         {%- for scriptfile in script_files %}
           {{ js_tag(scriptfile) }}
         {%- endfor %}
       {% else %}
         <script type="text/javascript">
             var DOCUMENTATION_OPTIONS = {
                 URL_ROOT:'{{ url_root }}',
                 VERSION:'{{ release|e }}',
                 LANGUAGE:'{{ language }}',
                 COLLAPSE_INDEX:false,
                 SOURCELINK_SUFFIX: '{{ sourcelink_suffix }}'
             };
         </script>
         {%- for scriptfile in script_files %}
           <script type="text/javascript" src="{{ pathto(scriptfile, 1) }}"></script>
         {%- endfor %}
       {% endif %}
       <script type="text/javascript" src="{{ pathto('_static/js/theme.js', 1) }}"></script>
   
       {# OPENSEARCH #}
       {%- if use_opensearch %}
       <link rel="search" type="application/opensearchdescription+xml"
             title="{% trans docstitle=docstitle|e %}Search within {{ docstitle }}{% endtrans %}"
             href="{{ pathto('_static/opensearch.xml', 1) }}"/>
       {%- endif %}
     {%- endif %}
     {%- endblock %}
   
     {%- block linktags %}
       {%- if hasdoc('about') %}
       <link rel="author" title="{{ _('About these documents') }}" href="{{ pathto('about') }}" />
       {%- endif %}
       {%- if hasdoc('genindex') %}
       <link rel="index" title="{{ _('Index') }}" href="{{ pathto('genindex') }}" />
       {%- endif %}
       {%- if hasdoc('search') %}
       <link rel="search" title="{{ _('Search') }}" href="{{ pathto('search') }}" />
       {%- endif %}
       {%- if hasdoc('copyright') %}
       <link rel="copyright" title="{{ _('Copyright') }}" href="{{ pathto('copyright') }}" />
       {%- endif %}
       {%- if next %}
       <link rel="next" title="{{ next.title|striptags|e }}" href="{{ next.link|e }}" />
       {%- endif %}
       {%- if prev %}
       <link rel="prev" title="{{ prev.title|striptags|e }}" href="{{ prev.link|e }}" />
       {%- endif %}
     {%- endblock %}
     {%- block extrahead %} {% endblock %}
   </head>
   
   <body class="wy-body-for-nav">
   
     {% block extrabody %} {% endblock %}
     <div class="wy-grid-for-nav">
       {# SIDE NAV, TOGGLES ON MOBILE #}
       
       <section data-toggle="wy-nav-shift" class="wy-nav-content-wrap">
   
         {# MOBILE NAV, TRIGGLES SIDE NAV ON TOGGLE #}
         <nav class="wy-nav-top" aria-label="top navigation">
           {% block mobile_nav %}
             <i data-toggle="wy-nav-top" class="fa fa-bars"></i>
           {% endblock %}
         </nav>
   
   
         <div class="wy-nav-content">
         {%- block content %}
           {% if theme_style_external_links|tobool %}
           <div class="rst-content style-external-links">
           {% else %}
           <div class="rst-content">
           {% endif %}
             {%- block document %}
              <div itemprop="articleBody">
               {% block body %}{% endblock %}
              </div>
              {% if self.comments()|trim %}
              <div class="articleComments">
               {% block comments %}{% endblock %}
              </div>
              {% endif%}
             </div>
             {%- endblock %}
           </div>
         {%- endblock %}
         </div>
   
       </section>
   
     </div>
   
   
   
     {# Do not conflict with RTD insertion of analytics script #}
     {% if not READTHEDOCS %}
       {% if theme_analytics_id %}
       <!-- Theme Analytics -->
       <script>
       (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
       })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
   
       ga('create', '{{ theme_analytics_id }}', 'auto');
       ga('send', 'pageview');
       </script>
   
       {% endif %}
     {% endif %}
   
     {%- block footer %} {% endblock %}
   
   </body>
   </html>
   
   ```

8. 最后运行 `make html` 命令

## 后续内容

这样做有两点好处：

- 之前的 rst 文件就得到了充分利用
- 生成出来的html 就没有我们不想要的内容了

现在我们需要将生成的 html 文件转成 md







