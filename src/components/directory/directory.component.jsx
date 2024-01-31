import CategoryItem from "../category-item/category-item.component";

import './directory.styles.scss';

const Directory = ({ categories }) => (
  <div className='directory-container'>
    {categories.map(item => (
      <CategoryItem key={item.id} category={item} />
    ))}
  </div>
);

export default Directory;