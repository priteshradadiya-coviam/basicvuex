export const state = {
  names: []
};

export const getters = {
  getNames: state => state.names
};

export const mutations = {
  ADD_NAME: (state, payload) => {
    const newTask = {
      id: payload.newId,
      task: payload.task,
      completed: false
    };
    state.names.unshift(newTask);
  },
  TOGGLE_NAME: (state, payload) => {
    const item = state.names.find(name => name.id === payload);
    item.completed = !item.completed;
  },
  DELETE_NAME: (state, payload) => {
    const index = state.names.findIndex(name => name.id === payload);
    state.names.splice(index, 1);
  }
};

export const actions = {
  addName: (context, payload) => {
    context.commit("ADD_NAME", payload);
  },
  toggleName: (context, payload) => {
    context.commit("TOGGLE_NAME", payload);
  },
  deleteName: (context, payload) => {
    context.commit("DELETE_NAME", payload);
  }
};
