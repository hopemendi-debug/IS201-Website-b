import { useEffect, useRef } from 'react';

export const TableauEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject the Tableau script
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.type = 'text/javascript';
    
    // We append it to the body or the div, but Tableau expects it to be near the element sometimes
    // The provided snippet does: vizElement.parentNode.insertBefore(scriptElement, vizElement);
    if (containerRef.current) {
      const vizElement = containerRef.current.getElementsByTagName('object')[0];
      if (vizElement) {
        vizElement.style.width = '100%'; 
        vizElement.style.height = '1732px'; // Height from snippet
        if (vizElement.parentNode) {
          vizElement.parentNode.insertBefore(script, vizElement);
        }
      }
    }

    return () => {
      // Cleanup if necessary, though script loading often leaves global objects
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      className='tableauPlaceholder' 
      id='viz1776448968904' 
      style={{ position: 'relative', width: '100%', height: 'auto', minHeight: '600px', overflow: 'auto' }}
      ref={containerRef}
    >
      <noscript>
        <a href='#'>
          <img 
            alt='Greatest Albums of All Time ' 
            src='https://public.tableau.com/static/images/Gr/GreatestAlbumsofAllTimetest/GreatestAlbumsofAllTime/1_rss.png' 
            style={{ border: 'none' }} 
            referrerPolicy="no-referrer"
          />
        </a>
      </noscript>
      <object className='tableauViz' style={{ display: 'none' }}>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
        <param name='embed_code_version' value='3' /> 
        <param name='site_root' value='' />
        <param name='name' value='GreatestAlbumsofAllTimetest/GreatestAlbumsofAllTime' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param name='static_image' value='https://public.tableau.com/static/images/Gr/GreatestAlbumsofAllTimetest/GreatestAlbumsofAllTime/1.png' /> 
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='en-US' />
      </object>
    </div>
  );
};
