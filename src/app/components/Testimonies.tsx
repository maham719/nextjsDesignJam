import Image from 'next/image';

const Testimonial = () => {
  const testimonials = [
    {
      image: '/images/client1.jpg', // Add actual paths to images
      name: 'Selina Gomez',
      title: 'CEO at Webecy Digital',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu.',
    },
    {
      image: '/images/client2.jpg',
      name: 'John Doe',
      title: 'Founder at TechWorld',
      feedback: 'Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.',
    },
    {
      image: '/images/client3.jpg',
      name: 'Jane Smith',
      title: 'Manager at XYZ Inc.',
      feedback: 'Tristique ultrices dolor aliquam lacus volutpat praesent. Vivamus tincidunt varius velit non tristique.',
    },
  ];

  return (
    <div className="bg-gray-50 text-center py-12 mb-[6rem]">
      <h2 className="text-3xl font-bold mb-8">Our Client Say!</h2>
      <div className="flex justify-center space-x-4 mb-6">
        {testimonials.map((client, index) => (
          <div key={index} className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={client.image}
              alt={client.name}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{testimonials[0].name}</h3>
        <p className="text-sm text-gray-500">{testimonials[0].title}</p>
        <p className="mt-4 text-gray-700 px-4">{testimonials[0].feedback}</p>
      </div>
      <div className="mt-6">
        <div className="w-10 h-1 bg-pink-500 mx-auto"></div>
      </div>
    </div>
  );
};

export default Testimonial;
