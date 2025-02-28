---
layout: markdown
title: Cody Usage and Privacy Notice
---

Last modified: June 28, 2023


### Sourcegraph Cody
**Sourcegraph Cody (“Cody”)** is a state-of-the-art AI coding assistant designed to help software developers by answering code questions and generating code. Cody uses Large Language Models (LLMs), Sourcegraph search, and Sourcegraph code intelligence to provide context-specific results to developers, streamlining their workflow, reducing the time spent on repetitive tasks, and improving the quality and consistency of their work. You can access the **beta** version of Cody through an editor extension or the Cody App. In the event of a conflict between this Cody Usage and Privacy Notice (“Cody Notice”) and the terms that govern your order form (“Terms”), the terms of the Cody Notice prevail. 

### I. Ownership
As between the parties, you own all inputs to and outputs generated by your use of Cody. You retain ownership of your code and responsibility for ensuring any code snippets emitted by Cody comply with software licenses and copyright law. 

### II. LLM training data
Sourcegraph partners with LLMs (**"Sourcegraph Partner LLMs"**) to provide the services. Sourcegraph Partner LLMs are trained on large datasets of public repositories. 

### III. No model training on your data
Sourcegraph and Sourcegraph Partner LLMs do not use your data to train any models, other than finetuning Cody solely for your proprietary use.

### IV. Zero-retention data-sharing with LLMs
Sourcegraph Partner LLMs will not retain any input or output from the model, including embeddings, beyond the time it takes to generate the output (**"Zero Retention"**).

### V. Data collection and use 
For all deployments, including Self-Hosted, Cloud, Cody App, and Sourcegraph.com, Sourcegraph collects and uses the following data to support and improve user experience:
- **Usage Data** is usage and operations data in connection with your use of Cody, such as metrics on frequency and length of a user feature engagement. Usage Data does not contain personal data other than an anonymous user ID.
- **User Feedback** is any form of feedback that the user submits, including thumbs up and thumbs down clicks and comments or ideas shared for the purpose of giving feedback.

**Cloud:** When you use Cody with Sourcegraph Cloud, Sourcegraph collects the following **Customer Content** solely to provide the Service and not for product improvement purposes:
- **User Prompts** are user submissions to Cody, such as a query or request. Sourcegraph translates the User Prompt into search query syntax and uses the search query syntax to find relevant code snippets in your codebase. Sourcegraph then submits the search query syntax and relevant code snippets  (“**LLM Prompt**”) to a third-party LLM. 
- **Responses** are the outputs returned to you by Cody. 
Sourcegraph uses Customer Content solely to provide the service and not for product improvement purposes. 

**Self-Hosted:** When you use Cody with a self-hosted instance of Sourcegraph, Sourcegraph does **not** have access to Customer Content unless included via support channels to Sourcegraph, as the software is hosted in the customer's systems. 

**Sourcegraph.com:** For individual users accessing the Sourcegraph Cody extension or Cody App via Sourcegraph.com, Sourcegraph also collects the following **User Content** to support and improve user experience, though none of it will be used to train any generally available models:
- User Prompts
- LLM Prompts
- Responses

### VI. Indemnification
Sourcegraph shall indemnify you against any claims alleging that your use of Cody infringes third-party intellectual property rights in accordance with the indemnification terms in your agreement. For paid subscriptions, Sourcegraph's indemnification obligation is excluded from any liability cap. You must use the most current version available and any filters provided by Sourcegraph.

### VII. Security
Sourcegraph will process Customer Content in accordance with the [Security Exhibit](https://about.sourcegraph.com/security-exhibit.pdf).

### VIII. Acceptable use
You may not use Cody for unlawful purposes. Additionally, you must follow the acceptable use policies of the following LLM providers:

[Anthropic Acceptable Use Policy](https://www.anthropic.com/aup)

### IX. No warranty
The experimental product may contain bugs, defects, and errors. Notwithstanding any other terms in your agreement with us, we provide the beta version of Cody “as is,” without warranties other than those expressly set forth in this Cody Notice. 

### X. Accuracy
Cody uses context from your codebase to substantially improve the accuracy of its responses compared to other AI-based tools. However, Sourcegraph does not guarantee the accuracy of Cody's answers. 


### Other frequently asked questions

#### 1. Will my Customer Content be shared with third parties?

Yes. Cody sends LLM Prompts to a third-party LLM provider. 
    
In addition, when an administrator turns on the feature to generate embeddings for a repository, a copy of the repository contents will be shared with a third-party LLM provider for the sole purpose of providing you the service.

#### 2. What if I have my own relationship with an LLM that I want to use instead? 
The following Sourcegraph commitments may not apply if you use your own LLM relationship in conjunction with Cody: 
- Any representations regarding data used to train the LLM
- Any representations regarding data retention (including Zero Retention), data collection, or data use by the LLM

For more information, see [docs.sourcegraph.com/cody](https://docs.sourcegraph.com/cody).
