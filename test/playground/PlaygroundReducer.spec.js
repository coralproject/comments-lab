import {expect} from 'chai';
import PlaygroundReducer from '../../src/playground/PlaygroundReducer';

describe('PlaygroundReducer', () => {
  it ('should return an initial state if none is defined', () => {
    let newState = PlaygroundReducer(undefined, {type:'FAKE_ACTION'});
    expect(newState).to.have.property('config');
    expect(newState).to.have.property('items');
  });

  describe('ADD_COMPONENT', () => {
    let action;
    beforeEach(() => {
      action = {
        type: 'ADD_COMPONENT',
        itemType:'comments',
        component: 'NYTContent',
        propTypes: ['content']
      };
    });

    it('should not morph state', () => {
      let state = {
        config:{},
        donot:'changeme'
      };
      PlaygroundReducer(state, action);
      expect(state).to.deep.equal({
        config:{},
        donot:'changeme'
      });
    });

    it('should add a component to config if the itemType does not yet exist', () => {
      let state = {config:{}};
      let newState = PlaygroundReducer(state, action);
      expect(newState.config).to.have.property('comments')
        .and.to.deep.equal([{
          propTypes:['content'],
          component:'NYTContent',
          configProps:undefined,
          order:undefined
        }]);
    });

    it('should add a component to config if the itemType already exists', () => {
      let state = {
        config:{
          comments:[{
            component:'FancyDate',
            propTypes:['pubdate']
          }]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState.config).to.have.property('comments')
        .and.to.deep.equal([
          {
            component:'FancyDate',
            propTypes:['pubdate']
          },
          {
            propTypes:['content'],
            component:'NYTContent',
            configProps:undefined,
            order:undefined
          }]);
    });

    it('should add an order attribute if one is specified', () => {
      let state = {
        config:{
          comments:[]
        }
      };

      action.order=0;
      let newState = PlaygroundReducer(state, action);
      expect(newState.config.comments[0]).to.have.property('order')
        .and.to.equal(0);
    });

  });

  describe('REMOVE_COMPONENT', () => {
    let action;
    beforeEach(() => {
      action = {
        type: 'REMOVE_COMPONENT',
        itemType:'comments',
        component: 'SillyComponent'
      };
    });

    it('should not morph state', () => {
      let state = {
        config:{},
        donot:'changeme'
      };
      PlaygroundReducer(state, action);
      expect(state).to.deep.equal({
        config:{},
        donot:'changeme'
      });
    });

    it('should remove a component from config', () => {
      let state = {
        config:{
          comments:[
            {
              component:'SillyComponent',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState.config).to.have.property('comments')
        .and.to.deep.equal([]);
    });

    it('should take no action if the itemType does not exist',() => {
      let state = {
        config:{
          authors:[
            {
              component:'SillyComponent',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState).to.deep.equal(state);
    });
    it('should take no action if the component does not exist',() => {
      let state = {
        config:{
          authors:[
            {
              component:'KeepMeComponent',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState).to.deep.equal(state);
    });
  });

  describe('UPSERT_COMPONENT', () => {
    let action;
    beforeEach(() => {
      action = {
        type: 'UPSERT_COMPONENT',
        itemType:'comments',
        component: 'UpdateMe',
        propTypes: ['changed']
      };
    });

    it('should not morph state', () => {
      let state = {
        config:{},
        donot:'changeme'
      };
      PlaygroundReducer(state, action);
      expect(state).to.deep.equal({
        config:{},
        donot:'changeme'
      });
    });

    it('should update the appropriate component', () => {
      let state = {
        config:{
          comments:[
            {
              component:'UpdateMe',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState.config).to.have.property('comments')
        .and.to.deep.equal([
          {
            component:'UpdateMe',
            propTypes:['changed']
          }]);
    });

    it('should take no action if the itemType does not exist',() => {
      let state = {
        config:{
          authors:[
            {
              component:'UpdateMe',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState).to.deep.equal(state);
    });
    it('should add a new component if one does not already exist',() => {
      let state = {
        config:{
          comments:[
            {
              component:'KeepMeComponent',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState).to.deep.equal({
        config:{
          comments:[
            {
              component:'KeepMeComponent',
              propTypes:['content']
            },
            {
              component:'UpdateMe',
              propTypes:['changed']
            }
          ]
        }
      });
    });

    it('should update configProps if no propTypes are sent', () => {
      let state = {
        config:{
          comments:[
            {
              component:'UpdateMe',
              propTypes:['content']
            }
          ]
        }
      };
      action.propTypes = null,
      action.configProps = {test:true};
      let newState = PlaygroundReducer(state, action);
      expect(newState.config.comments[0]).to.have.property('propTypes')
        .and.to.deep.equal(['content']);
      expect(newState.config.comments[0]).to.have.property('configProps')
        .and.to.deep.equal({test:true});
    });

    it('should update configProps if propTypes are sent', () => {
      let state = {
        config:{
          comments:[
            {
              component:'UpdateMe',
              propTypes:['content']
            }
          ]
        }
      };
      action.configProps = {test:true};
      let newState = PlaygroundReducer(state, action);
      expect(newState.config.comments[0]).to.have.property('propTypes')
        .and.to.deep.equal(['changed']);
      expect(newState.config.comments[0]).to.have.property('configProps')
        .and.to.deep.equal({test:true});
    });

    it('should update order if order is sent', () => {
      let state = {
        config:{
          comments:[
            {
              component:'UpdateMe',
              propTypes:['content']
            }
          ]
        }
      };
      action.order=0;
      let newState = PlaygroundReducer(state, action);
      expect(newState.config.comments[0]).to.have.property('order')
        .and.to.equal(0);
    });
  });

  describe('UPDATE_COMPONENT', () => {
    let action;
    beforeEach(() => {
      action = {
        type: 'UPDATE_COMPONENT',
        itemType:'comments',
        component: 'UpdateMe',
        propTypes: ['changed']
      };
    });

    it('should not morph state', () => {
      let state = {
        config:{},
        donot:'changeme'
      };
      PlaygroundReducer(state, action);
      expect(state).to.deep.equal({
        config:{},
        donot:'changeme'
      });
    });

    it('should update the appropriate component', () => {
      let state = {
        config:{
          comments:[
            {
              component:'UpdateMe',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState.config).to.have.property('comments')
        .and.to.deep.equal([
          {
            component:'UpdateMe',
            propTypes:['changed']
          }]);
    });

    it('should take no action if the itemType does not exist',() => {
      let state = {
        config:{
          authors:[
            {
              component:'UpdateMe',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState).to.deep.equal(state);
    });
    it('should take no action if component does not already exist',() => {
      let state = {
        config:{
          comments:[
            {
              component:'KeepMeComponent',
              propTypes:['content']
            }
          ]
        }
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState).to.deep.equal({
        config:{
          comments:[
            {
              component:'KeepMeComponent',
              propTypes:['content']
            }
          ]
        }
      });
    });

    it('should update configProps if no propTypes are sent', () => {
      let state = {
        config:{
          comments:[
            {
              component:'UpdateMe',
              propTypes:['content']
            }
          ]
        }
      };
      action.propTypes = null,
      action.configProps = {test:true};
      let newState = PlaygroundReducer(state, action);
      expect(newState.config.comments[0]).to.have.property('propTypes')
        .and.to.deep.equal(['content']);
      expect(newState.config.comments[0]).to.have.property('configProps')
        .and.to.deep.equal({test:true});
    });

    it('should update configProps if propTypes are sent', () => {
      let state = {
        config:{
          comments:[
            {
              component:'UpdateMe',
              propTypes:['content']
            }
          ]
        }
      };
      action.configProps = {test:true};
      let newState = PlaygroundReducer(state, action);
      expect(newState.config.comments[0]).to.have.property('propTypes')
        .and.to.deep.equal(['changed']);
      expect(newState.config.comments[0]).to.have.property('configProps')
        .and.to.deep.equal({test:true});
    });

    it('should update order if order is sent', () => {
      let state = {
        config:{
          comments:[
            {
              component:'UpdateMe',
              propTypes:['content']
            }
          ]
        }
      };
      action.order=0;
      let newState = PlaygroundReducer(state, action);
      expect(newState.config.comments[0]).to.have.property('order')
        .and.to.equal(0);
    });
  });

  describe('SEND_COMMENT', () => {
    let action;
    beforeEach(() => {
      action = {
        type: 'SEND_COMMENT',
        comment:{content:'comment'},
        id: '123'
      };
    });

    it('should not morph state', () => {
      let state = {
        items:{
          comments:{}
        },
        donot:'changeme',
        stream:['a']
      };
      PlaygroundReducer(state, action);
      expect(state).to.deep.equal({
        items:{
          comments:{}
        },
        donot:'changeme',
        stream:['a']
      });
    });

    it('should add a comment to items', () => {
      let state = {items:{
        comments:{}
      }};
      let newState = PlaygroundReducer(state, action);
      expect(newState.items.comments).to.have.property('123')
        .and.to.deep.equal({content:'comment'});
    });

    it('should add a comment to the front of the stream', () => {
      let state = {
        items:{
          comments:{}
        },
        stream:['a']
      };
      let newState = PlaygroundReducer(state, action);
      expect(newState.stream).to.deep.equal(['123','a']);
    });

  });

  describe('UPDATE_ITEM', () => {
    let action;
    let state;
    beforeEach(() => {
      action = {
        type: 'UPDATE_ITEM',
        itemType:'comments',
        id: '123',
        propType: 'content',
        propVal: 'NewContent'
      };
      state = {
        items:{
          comments:{
            '123':{
              content:'OldContent'
            }
          }
        }
      };
    });

    it('should not morph state', () => {
      PlaygroundReducer(state, action);
      expect(state).to.deep.equal({
        items:{
          comments:{
            '123':{
              content:'OldContent'
            }
          }
        }
      });
    });

    it('should update the appropriate item', () => {
      let newState = PlaygroundReducer(state, action);
      expect(newState.items.comments['123'].content).to.equal('NewContent');
    });
    it('should take no action if the itemType does not exist',() => {
      action.itemType='authors';
      let newState = PlaygroundReducer(state,action);
      expect(newState).to.deep.equal(state);
    });
    it('should take no action if the id does not exist', () => {
      action.id='456';
      let newState = PlaygroundReducer(state,action);
      expect(newState).to.deep.equal(state);
    });
  });

  describe('SET_STREAM', () => {
    let action;
    let state;
    beforeEach(() => {
      action = {
        type: 'SET_STREAM',
        stream:['a','b']
      };
      state = {
        stream:[]
      };
    });

    it('should not morph state', () => {
      PlaygroundReducer(state, action);
      expect(state).to.deep.equal({
        stream:[]
      });
    });

    it('should update the stream', () =>{
      let newState = PlaygroundReducer(state, action);
      expect(newState).to.deep.equal({
        stream:['a','b']
      });
    });
  }) ;

  describe('SET_TOGGLER', () => {
    let action;
    let state;
    beforeEach(()=> {
      action={
        type:'SET_TOGGLER',
        groupIndex:'content',
        togglerIndex:'emoji',
        status:false
      };
      state={
        togglerGroups:{
          content:{
            togglers:{
              emoji:{
                status:true
              }              
            }
          }
        }
      };
    });

    it('should not morph state', () => {
      PlaygroundReducer(state, action);
      expect(state).to.deep.equal({
        togglerGroups:{
          content:{
            togglers: {
              emoji:{
                status:true
              }
            }
          }
        }
      });
    });

    it('should toggle the appropriate option',() => {
      let newState = PlaygroundReducer(state, action);
      expect(newState.togglerGroups.content.togglers.emoji.status).to.be.false;
    });
  });
  
  describe('TOGGLER_FROM_URL', () => {
    let action;
    let state;
    beforeEach(() => {
      action = {
        type: 'TOGGLER_FROM_URL',
        url: '%7B%22emoji%22%3Atrue%7D'
      };
      state = {
        togglerGroups:{
          content:{
            togglers:{
              emoji:{
                status:false
              }              
            }
          }
        }
      };
    });

    it('should not morph state', () => {
      PlaygroundReducer(state, action);
      expect(state).to.deep.equal({
        togglerGroups:{
          content:{
            togglers:{
              emoji:{
                status:false
              }              
            }
          }
        }
      });
    });

    it('should take no action if URL params are blank', () => {
      action.url=null;
      let newState = PlaygroundReducer(state, action);
      expect(newState).to.deep.equal(state);
    });

    it('should set toggles based on a formatted URL', () =>{
      let newState = PlaygroundReducer(state, action);
      expect(newState.togglerGroups.content.togglers.emoji.status).to.be.true;    
    });
  });

  describe('SET_TOGGLER_GROUP', () => {
    let action;
    let state;
    beforeEach(() => {
      action = {
        type: 'SET_TOGGLER_GROUP',
        group:'moderation'
      };
      state = {
        selectedTogglerGroup:'content'
      };
    });

    it('should not morph state', () => {
      PlaygroundReducer(state, action);
      expect(state).to.deep.equal({
        selectedTogglerGroup:'content'
      });
    });

    it('should switch the selectedTogglerGroup', () => {
      let newState = PlaygroundReducer(state, action);
      expect(newState).to.deep.equal({
        selectedTogglerGroup:'moderation'
      });
    });
  });


  describe('SET_SNACKBAR', () => {
    let action;
    let state;
    beforeEach(() => {
      action = {
        type: 'SET_SNACKBAR',
        snackbar:{
          text:'Show me!',
          actionName: 'done'
        }
      };
      state = {
        snackbar:{}
      };
    });

    it('should not morph state', () => {
      PlaygroundReducer(state, action);
      expect(state).to.deep.equal({
        snackbar:{}
      });
    });

    it('should assign snackbar to state', () => {
      let newState = PlaygroundReducer(state, action);
      expect(newState).to.deep.equal({
        snackbar:{
          text:'Show me!',
          actionName: 'done'
        }
      });
    });
  });
});
