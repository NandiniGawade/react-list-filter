import { CityList } from './CityList';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ListFilter } from '../ListFilter/ListFilter';
import TableComponent  from "../TableComponent/TableComponent";

configure({adapter: new Adapter()});


describe('TableComponent', () => {
    const wrapper = shallow(<CityList/>);

    it('it should have list search component', () => {
        expect(wrapper.find(ListFilter)).toHaveReturned;
    });

    it('it should have table component', () => {
        expect(wrapper.find(TableComponent)).toHaveReturned;
    });
});
