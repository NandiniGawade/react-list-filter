import { TableBody, TableRow } from '@material-ui/core';
import { configure, shallow } from 'enzyme';
import TableComponent from './TableComponent';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});

let props = {
    data: [{
        "city": "The Hague",
        "lat": "52.0767", 
        "lng": "4.2986", 
        "country": "Netherlands", 
        "iso2": "NL", 
        "admin_name": "Zuid-Holland", 
        "capital": "primary", 
        "population": "1406000", 
        "population_proper": "501725"
      }],
    handleChangeRowsPerPage: (event: any) => {},
    handleChangePage: (event: any, newPage: number) => {},
    rowsPerPage: 10,
    page: 0,
};

describe('TableComponent', () => {
    it('renders table', () => {
        const wrapper = shallow(<TableComponent {...props} />);
        expect(wrapper.find(TableBody).find(TableRow)).toHaveLength(1);
    });

    it('If searched city is not found, than it should display message searched city not found.', () => {
        props.data = [];
        const wrapper = shallow(<TableComponent {...props} />);
        expect(wrapper.find(TableBody).find(TableRow)).toHaveLength(0);
    });

});