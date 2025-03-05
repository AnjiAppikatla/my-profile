// import React from 'react';

function Projects() {
    return (
        <>
            <div>
                <h1 className="text-center my-10 text-purple-800">My Projects</h1>
            </div>

            <div className="row mb-10">
                <div className="col-md-5 offset-1 flex items-center">
                    <a className="text-1xl cursor-pointer">www.service.emedpractice.com/new</a>
                </div>
                <div className="col-md-5">
                    <p>Service.emedpractice.com/emednew(EHR Application). Electronic Health Records are digital
                        versions of paper medical records that contain all the information about a patient’s medical
                        history, diagnoses, medications, treatment plans, immunization dates, allergies, radiology
                        images, and laboratory and test results . EHRs are designed to improve the quality of care
                        provided while enabling greater communication between physicians and their patients . EHRs
                        can alert clinicians to lab values outside normal ranges and give healthcare providers the ability
                        to better manage incoming lab results. EHRs also provide a structure and process for
                        communication, ensuring care plans are available to prevent conflicting treatments and
                        redundancy . EHRs have become mainstream and are foundational to safety, quality,
                        accountability, and efficiency in healthcare </p>
                </div>
            </div>
            <div className="row my-10">
                <div className="col-md-5 offset-1 flex items-center">
                    <a className="text-1xl cursor-pointer">www.service.emedpractice.com/patientportal</a>
                </div>
                <div className="col-md-5">
                    <p>A patient portal is a secure online platform that allows patients to access their medical
                        information and communicate with their healthcare providers. It is a product of meaningful use
                        requirements and was mandated as a way to provide patients with timely access to their health
                        care. Patient portals give patients access to their health information to take a more active role
                        in their treatment. They can check lab results, request prescription refills, update insurance
                        information, manage any unpaid balances and more. Patient portals help encourage better
                        physician-patient relationships and give patients more control over their treatment. They also
                        improve the quality of care provided while enabling greater communication between physicians
                        and their patients. Patient portals are increasingly popular in healthcare organizations of all
                        sizes and specialties</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 offset-1 flex items-center">
                    <a className="text-1xl cursor-pointer">www.service.emedpractice.com/labportal</a>
                </div>
                <div className="col-md-5">
                    <p>A lab portal is a secure online platform that allows healthcare providers to access and manage
                        electronic lab results of their patients. By integrating lab results into electronic health records
                        (EHRs), healthcare providers can improve the quality of care provided while enabling greater
                        communication between physicians and their patients. EHRs can alert clinicians to lab values
                        outside normal ranges and give healthcare providers the ability to better manage incoming lab
                        results. Your local Regional Extension Center (REC) can help you set up lab interface modules,
                        find ways to manage incoming lab results that work for your organization, improve health care
                        quality and care coordination, and realize the benefits of electronic health records.</p>
                </div>
            </div>
        </>
    );
}

export default Projects;