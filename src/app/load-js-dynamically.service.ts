import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  { name: 'clientlib-dependencies', src: '../../../public/js/clientlib-dependencies.js' },
  { name: 'customdev', src: '../../../public/js/customdev.js' },
  { name: 'jquery', src: '../../../public/js/jquery.js' },
  { name: 'query-ui', src: '../../../public/js/jquery-ui.js' },
  { name: 'burger-menu', src: '/murali/public/js/burger-menu.js' },
  { name: 'type', src: '../../../public/js/type.js' },
  { name: 'custom', src: '../../../public/js/custom.js' },
  { name: 'jquery.scrollify.min', src: '../../../public/js/jquery.scrollify.min.js' },
  { name: 'clientlib-base', src: '../../../public/js/clientlib-base.js' },
  { name: 'utils', src: '../../../public/js/utils.js' },
  { name: 'granite', src: '../../../public/js/granite.js' },
  { name: 'shared', src: '../../../public/js/shared.js' },
  { name: 'clientlib-commons', src: '../../../public/js/clientlib-commons.js' },
  { name: 'container', src: '../../../public/js/container.js' },

];

declare var document: any;


@Injectable({
  providedIn: 'root'
})
export class LoadJsDynamicallyService {


  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        //load script
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  //IE
            script.onreadystatechange = () => {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    this.scripts[name].loaded = true;
                    resolve({script: name, loaded: true, status: 'Loaded'});
                }
            };
        } else {  //Others
            script.onload = () => {
                this.scripts[name].loaded = true;
                resolve({script: name, loaded: true, status: 'Loaded'});
            };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }
}
