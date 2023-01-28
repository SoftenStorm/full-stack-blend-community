var FullStackBlend = {};

var DeclarationHelper = {
  declareNamespace: (path: string) => {
    let splited = path.split('.');
    let current: any = FullStackBlend;

    splited.forEach((name) => {
      if (current[name] === undefined) {
        current[name] = {};
      }
      current = current[name];
    });

    return current;
  },

  'declare': (path: string, klass: any) => {
    let splited = path.split('.');
    let name = splited.pop();
    let namespacePath = splited.join('.');

    let namespace = DeclarationHelper.declareNamespace(namespacePath);
    namespace[name] = klass;

    return namespace[name];
  }
};

export {FullStackBlend, DeclarationHelper};