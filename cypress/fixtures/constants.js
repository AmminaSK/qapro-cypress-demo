let C = exports;

C.labels = {}

C.errorMsg = {
    incorrectEmailOrPassword: "Incorrect username or password.",
    checkAllBoxes: "Please check all boxes to continue",
    insuranceRequiredFields: '\'investment_account_identifier.personal_super_insurance_premium_choice\' is required'

}
C.noEthicsMessage = 'You have not chosen any ethics to be excluded from your portfolio'
C.alertMsgReviewPage = 'You must have minimum 2 applicant(s).'
C.wrongCredentials = 'Incorrect username or password.'

C.investmentStepMessages = {
    step1: "Welcome to the Qapro Wealth Onboarding Portal. Please take a minute to familiarise yourself with the key functions of the portal.",
    step2: "You can always come back and change your investment choice later.",
    step3: "You can always go back",
    step4: "You may jump to different tabs within the onboarding portal. Make sure you have saved the settings on your current page before moving tabs.",
    step5: "Each page in the onboarding portal has a short video tutorial for you to watch in case you get stuck.",
    step6: "If you are still stuck or have questions after watching our video tutorial, you'll have the option to message us through our chat box, or simply give us a call."
}

C.buildYourPortfolioStepMsgs = {
    step1: "You have chosen to allocate which portfolios to invest in. When your allocation total = 100% you can progress:",
    step2: "Click the arrows to see what your options are for each category:",
    step3: "Throughout the page, you will see question marks. If you hover over these, you will see more detailed information:",
    step4: "The three main types of base portfolios are at the top:",
    step5: "When you are finished adding portfolios, you can screen out particular stocks. First choose a category:",
    step6: "Then choose which type of stocks you would like to exclude:",
    step7: "Press “Save and Continue” when you are finished:"
}
C.buildYourPortfolioStepMsgsIB = {
    step1: "You have chosen to allocate which portfolios to invest in. When your allocation total = 100% you can progress:",
    step2: "Click the arrows to see what your options are for each category:",
    step3: "Throughout the page, you will see question marks. If you hover over these, you will see more detailed information:",
    step4: "The three main types of base portfolios are at the top:",
    step5: "When you are finished adding portfolios, you can screen out particular stocks. First choose a category:",
    step6: "Portfolio Tilts show specific themes that you can decide to invest in:",
    step7: "Click the arrow to see the options for each portfolio tilt. For example, to get extra exposure to cloud computing: (a) click the portfolio tilts arrow (b) click the technology category arrow (c) type in your desired exposure into the cell under cloud computing",
    step8: "When you are finished adding portfolios, you can screen out particular stocks. First choose a category:",
    step9: "Then choose which type of stocks you would like to exclude:",
    step10: "Press “Save and Continue” when you are finished:"
}
C.emailTemplates = {
    individualAccountCreated: {
        from: `Qapro Wealth <contact@qapro.ba>`,
        subject: 'Your Investment Account Application has been submitted',
        content: 'Welcome aboard! Your application for Individual Investment Account has been successfully submitted.',
        attachments: [
            'Qapro Wealth - Financial Services Guide.pdf',
            'Qapro Wealth - Investment and Fee Summary.pdf',
            'Qapro Wealth - Statement of Advice.pdf',
            'Praemium SMA - Product Disclosure Statement and Investment Menu extract.pdf'
        ]
    },

    individual_IB_AccountCreated: {
        from: `Qapro Wealth <contact@qapro.ba>`,
        subject: 'Your Investment Account Application has been submitted',
        content: 'Welcome aboard! Your application for Individual Investment Account has been successfully submitted.',
        attachments: [
            'Qapro Wealth - Financial Services Guide.pdf',
            'Qapro Wealth - MDA Brochure and Agreement.pdf',
            'Qapro Wealth - Investment and Fee Summary.pdf',
            'Qapro Wealth - Statement of Advice.pdf',
        ]
    },

    accountChanges: {
        from: `Qapro Wealth <contact@qapro.ba>`,
        subject: 'Account Changes successfully received',
        content: 'The changes for your Individual Investment Account has been successfully submitted. ',
        attachments: [
            'Qapro Wealth- Financial Services Guide.pdf',
            'Praemium SMA - Product Disclosure Statement and Investment Menu extract.pdf',
            'Qapro Wealth - Record of Engagement.pdf'
        ]
    },

    changeEthics: {
        from: `Qapro Wealth <contact@qapro.ba>`,
        subject: 'Account Changes successfully received',
        content: 'The changes for your Individual Investment Account has been successfully submitted. ',
        attachments: [
            'Qapro Wealth- Financial Services Guide.pdf',
            'Praemium SMA - Product Disclosure Statement and Investment Menu extract.pdf',
            'Qapro Wealth - Statement of Advice.pdf'
           // 'Qapro Wealth - Record of Engagement.pdf'
        ]
    },

    uploadedDocument: {
        from: `Qapro Wealth <dev@qapro.ba>`,
      //  subject: 'Document Uploaded by tesf14cb@qapro.ba for NW5684',
        subject: 'Document Uploaded',
        content: 'driver_license has been uploaded',
        attachments: []
    },

    signUpNewUser: {
        from: `Qapro Wealth <contact@qapro.ba>`,
        subject: 'Test Email - Welcome to Qapro Wealth',
        content: 'Thanks for registering with Qapro Wealth.',
        attachments: [
            'Qapro Wealth - Financial Services Guide.pdf',
        ]
    },
}
module.exports = C;
