import rules from '../common/rules';
import omit from 'lodash/omit';

export const createValidator=(spec)=> {
    console.info('this is create validator spec',spec);
    // If we're given a string like 'minLength:3', we can see if it exists in
    // our globally defined rules.
    if (typeof spec === 'string') {
        const [name, params] = spec.split(':');
  

        console.info('this is create validator name ' ,name,params);
        const rule = rules[name];
        console.info('this is create rule',rule);
        if (rule) {

            console.info('this is create validatior again',params);
            return createValidator({
                ...rule,
                params
            });
        } else {
            // Whoops, rule not found...
        }
    }

    const {
        test,
        message,
        params = []
    } = spec;

    console.info('this is test ',test );

    console.info('this is message ',message );

    console.info('this is parameter ',params );
    const args = Array.isArray(params) ? params : [params];

    return {
        test(value) {
            return test(value, ...args);
        },
        report(value) {
            if (typeof message === 'function') {
                return message(value, ...args);
            } else {
                return message;
            }
        }
    };
}
