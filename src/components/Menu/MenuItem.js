const MenuItem = ({ item }) => {
  return (
    <li>
      <img src={item.image} alt="Menu Item" />
      <h6>{item.title}</h6>
      <p>{item.description}</p>
    </li>
  );
};

export default MenuItem;
