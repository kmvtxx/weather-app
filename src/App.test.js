import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

test('Renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/weatherwatch/i);
  expect(linkElement).toBeInTheDocument();
});

test('Initial fetch', () => {
  global.fetch = jest.fn(() =>
  Promise.resolve({
  json: () => Promise.resolve({fetchedCities: [ Paris ]}),
}))
fetch()
    .then((response) => response.json())
    .then((json) => expect(json).toBe({fetchedCities: [ Paris ]}))

// shallow met component erin als wrapper -> wrapper.initialFetch = jest.fn()
});

const wrapper = mount(<App />);
const instance = wrapper.instance();
const spy = jest.spyOn(instance, 'initialFetch'); 
instance.componentDidMount();

describe("<App/>", () => {
  describe("initial Fetch", () => {
    it("should update state after componentDidMount()", () => {
      instance.initialFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ fetchedCities: [], weatherReport: {name: 'Paris'}, unit: 'C' })
      }
      
    )
  );
      return instance.initialFetch().then(() => {
        expect(wrapper.state()).toEqual({ fetchedCities: [], weatherReport: {name: 'Paris'}, unit: 'C' });
      });
    });
  });
}); 


//zorgen dat de app al is gemount


it('bit more', async () => {
  let wrapper = shallow(<App/>);
  const instance = wrapper.instance();

  const spy = jest.spyOn(instance, 'initialFetch'); 
  instance.componentDidMount();
  instance.jsonData = { fetchedCities: [], weatherReport: {name: 'Paris'}, unit: 'C' };
  wrapper.setState({ fetchedCities: [], weatherReport: {name: 'Paris'}, unit: 'C' });

  expect(spy).toHaveBeenCalled();
  expect(instance.jsonData).toStrictEqual({ fetchedCities: [], weatherReport: {name: 'Paris'}, unit: 'C' });
  
  wrapper.instance().initialFetch = jest.fn((jsonData = { fetchedCities: [], weatherReport: {name: 'Paris'}, unit: 'C' }) =>
    Promise.resolve({
      json: () => Promise.resolve({ fetchedCities: [], weatherReport: {name: 'Paris'}, unit: 'C' })
      }
    )
  );
  console.log(wrapper.state())

  expect(wrapper.state()).toStrictEqual({ fetchedCities: [], weatherReport: {name: 'Paris'}, unit: 'C' })

  //wrapper.setState({fetchedCities: [ 'Paris' ]})
  /*
  jest.spyOn(instance, 'initialFetch');
  instance.componentDidMount();
  instance.jsonData = {fetchedCities: [ 'Paris' ]};
  
  //await instance.componentDidMount()
  
  wrapper.instance().initialFetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({fetchedCities: [ 'Paris' ]})
      }
    )
  );
  
  wrapper.update();
  //wrapper.instance().handleNameInput('BoB');
  
  
  expect(wrapper.instance().initialFetch).toHaveBeenCalled();*/
  spy.mockRestore();
  console.log("state1 ", wrapper.state());
}) 

