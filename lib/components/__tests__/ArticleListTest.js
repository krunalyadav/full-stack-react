import React from 'react';
import ArticleList from '../ArticleList';
import Article from '../Article';

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    }
  };

  Article.propTypes = {};

  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList {...testProps} />);

    expect(wrapper.find('Article').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
