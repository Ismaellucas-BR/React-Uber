function BlogComponent(props) {
  return (
    <div className={`loginRedirect flex flex-col mt-4  ${props.divClass}`}>
      <div className="w-full">
        <img
          src={props.image}
          alt="Motorista da Uber"
          layout="responsive"
          width={800}
          height={800}
        />
      </div>
      <h4 className="font-UberMove font-light text-base lg:text-lg my-4">
        {props.title}
      </h4>
      <p className="text-base">{props.content}</p>
      <div className=" inline-flex my-10">
        <p className="text-black font-UberMove font-light border-b pb-1">
          {props.titleBtn}
        </p>
      </div>
    </div>
  );
}

export default BlogComponent;
