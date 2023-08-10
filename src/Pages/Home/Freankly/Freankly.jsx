import Heading from "../../Components/Heading/Heading";


const Freankly = () => {
    return (
        <div className="lg:px-28 md:px-12 px-8 py-8">
            <div>
                <Heading
                    headingTitle='Have Questions? Look Here'
                    headDeatils='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati  dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.'
                >

                </Heading>
                <div className="mt-12 lg:px-56">
                    <div className="collapse collapse-arrow border-b-2">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            How to install Mamondots?
                        </div>
                        <div className="collapse-content">
                            <p className="text-base font-medium text-[#262626b5]">
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-b-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Can i get support from the author?
                        </div>
                        <div className="collapse-content">
                            <p className="text-base font-medium text-[#262626b5]">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            </p>
                        </div>
                    </div >
                    <div className="collapse collapse-arrow border-b-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Do you have a free trail?
                        </div>
                        <div className="collapse-content">
                            <p className="text-base font-medium text-[#262626b5]">
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-b-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How can i edit my personal information
                        </div>
                        <div className="collapse-content">
                            <p className="text-base font-medium text-[#262626b5]">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-b-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Cantact form isn't working?
                        </div>
                        <div className="collapse-content">
                            <p className="text-base font-medium text-[#262626b5]">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Freankly;