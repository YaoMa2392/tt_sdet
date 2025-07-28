import React from 'react';

const FeatureCard = ({ ID, FunctionName, Description, HighConcurrency }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-[1.02] hover:shadow-2xl">
        <h3 className="text-xl font-bold text-indigo-600 mb-2">{ID}. {FunctionName}</h3>
        <p className="text-gray-800 mb-2">
            <span className="font-semibold">Description: </span>{Description}
        </p>
        <p className="text-gray-600 text-sm">
            <span className="font-semibold text-gray-700">High Concurrency Characteristics: </span>{HighConcurrency}
        </p>
    </div>
);

const FeatureGrid = ({ data }) => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                High Concurrency Scenarios in TikTok Live
            </h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.map(({ id, challenge, solution, result }) => (
                    <FeatureCard
                        key={id}
                        ID={id}
                        FunctionName={challenge}
                        Description={solution}
                        HighConcurrency={result}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeatureGrid;
